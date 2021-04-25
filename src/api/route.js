import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/route/index',
    methods: 'get',
    params: query
  })
}

export function add(query) {
  return request({
    url: '/route/save',
    method: 'post',
    data: query
  })
}

export function del(query) {
  return request({
    url: 'route/delete',
    method: 'post',
    data: query
  })
}

export function all(query) {
  return request({
    url: 'route/all',
    method: 'get',
    data: query
  })
}
