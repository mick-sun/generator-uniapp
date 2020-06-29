import request from '@/utils/request'

export function get (params) {
  return request.get('get-url', params, {
    // headers config
  })
}

export function post (parameter) {
  return request.post('post-url', parameter, {
    // headers config
  })
}
