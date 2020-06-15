import qs from 'qs'
// #ifdef MP_WEIXIN
import Fly from 'flyio/dist/npm/wx'
import { ACCESS_TOKEN } from '@/store/mutation-types'
// #endif
const request = new Fly()

request.config.baseURL = process.env.VUE_APP_BASE_API

function bizErrorHandle (response) {
  const { responseCode, responseText } = response
  if ([10018, 10017].includes(responseCode)) {
    uni.reLaunch({
      url: '/pages/login/login'
    })
  } else {
    uni.showToast({
      title: responseText,
      icon: 'none'
    })
  }
  return Promise.reject(response)
}

request.interceptors.request.use(request => {
  if (request.showLoading) {
    uni.showLoading({
      title: '加载中...'
    })
  }

  const token = uni.getStorageSync(ACCESS_TOKEN)
  if (token) {
    request.headers['Authorization'] = 'Bearer ' + token
  }

  if (!request.headers['Content-Type'].includes('json')) {
    request.body = qs.stringify(request.body)
  }
})

request.interceptors.response.use(response => {
  const { request, data, status } = response
  const { showLoading } = request
  showLoading && uni.hideLoading()
  if (status === 200) {
    if (data.responseCode !== 10000) {
      return bizErrorHandle(data)
    }
    return Promise.resolve(data)
  }
}, err => {
  // 发生网络错误后会走到这里
  const { request, message, response } = err
  const { showLoading } = request
  const status = response && response.status
  if (status) {
    // status error
    uni.showToast({
      title: `${status}:${response.statusText}`,
      icon: 'none'
    })
  } else {
    // system error: e.g request:fail:timeout
    uni.showToast({
      title: message,
      icon: 'none'
    })
  }
  showLoading && uni.hideLoading()
  return Promise.reject(err)
})

export default request
