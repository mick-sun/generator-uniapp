import { getUserInfo, userLogin, userLogout } from '@/services/user'
import { ACCESS_TOKEN } from '@/store/mutation-types'

const user = {
  state: {
    token: '',
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(response => {
          const { responseData } = response
          uni.setStorageSync(ACCESS_TOKEN, responseData)
          commit('SET_TOKEN', responseData)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    logout ({ commit }) {
      return new Promise((resolve) => {
        userLogout().then(() => {
          resolve()
        }).catch(() => {
          resolve()
        }).finally(() => {
          commit('SET_TOKEN', '')
          commit('SET_USER_INFO', {})
          uni.removeStorageSync('token')
        })
      })
    },

    // 获取用户信息
    getUserInfo ({ commit, state }, refresh = false) {
      return new Promise((resolve, reject) => {
        if (Object.keys(state.userInfo).length > 0 && !refresh) {
          resolve(state.userInfo)
        } else {
          getUserInfo().then(response => {
            const { responseData } = response
            commit('SET_USER_INFO', responseData)
            resolve(responseData)
          }).catch(error => {
            reject(error)
          })
        }
      })
    }
  }
}

export default user
