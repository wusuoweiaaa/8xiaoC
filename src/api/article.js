import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/article/index',
    methods: 'get',
    params: query
  })
}

export function del(query) {
  return request({
    url: '/article/detele',
    methods: 'post',
    data: query
  })
}
