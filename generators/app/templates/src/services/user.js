import request from '@/utils/request'

export function getUserInfo () {
  request.post('/user/info')
}

export function userLogin () {
  request.post('/user/login')
}

export function userLogout () {
  request.post('/user/logout')
}
