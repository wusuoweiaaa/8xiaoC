import request from '@/utils/request'

export function login(query) {
  return request({
    url: 'login',
    method: 'post',
    data:  query  
  })
}

export function getInfo() {
  return request({
    url: '/users/login-user-info',
    method: 'get',
  })
}

export function getReportCert () {

  return request({
    url: '/users/reported/cert',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
