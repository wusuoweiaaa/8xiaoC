import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/role/index',
    methods: 'get',
    params: query
  })
}

export function del(query) {
  return request({
    url: '/role/delete',
    method: 'post',
    data: query
  })
}

export function add(query) {
  return request({
    url: '/role/save',
    method: 'post',
    data: query
  })
}

export function all(query) {
  return request({
    url: 'role/all',
    method: 'get',
    params: query
  })
}
