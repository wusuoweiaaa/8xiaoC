/*
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 20:47:09
 * @LastEditTime : 2021-04-26 00:01:38
 * @FilePath     : /8xiaoC/src/api/cert.js
 * @Description  : Do not edit
 */
import request from '@/utils/request'
// 健康证
export function postHealthCert(data) {
    return request({
      url: '/health-cert',
      method: 'post',
      data: data
    })
  }

  export function getHealthCert(data) {
    return request({
      url: '/health-cert',
      method: 'get',
      data: data
    })
  }

  export function getHealthCertDetail(id) {
    return request({
      url: `/health-cert/${id}`,
      method: 'get',
    })
  }
  export function putHealthCertId(id,data) {
    return request({
      url: `/health-cert/${id}`,
      method: 'put',
      data: data
    })
  }

  // 公共卫生
  export function getPublicCert() {
    return request({
      url: `/public-hygiene-cert`,
      method: 'get',
      data: data
    })
  }
  export function postPublicCert(data) {
    return request({
      url: `/public-hygiene-cert`,
      method: 'post',
      data: data
    })
  }
  export function getPublicCertDetail(id,data) {
    return request({
      url: `/public-hygiene-cert/${id}`,
      method: 'get',
      data: data
    })
  }
  export function putPublicCertId(id,data) {
    return request({
      url: `/public-hygiene-cert/${id}`,
      method: 'put',
      data: data
    })
  }

  // 食品
  export function getFoodBusinessCert() {
    return request({
      url: `/food-business-cert`,
      method: 'get',
      data: data
    })
  }
  export function postFoodBusinessCert(data) {
    return request({
      url: `/food-business-cert`,
      method: 'post',
      data: data
    })
  }
  export function getFoodBusinessCertDetail(id,data) {
    return request({
      url: `/food-business-cert/${id}`,
      method: 'get',
      data: data
    })
  }
  export function putFoodBusinessCertId(id,data) {
    return request({
      url: `/food-business-cert/${id}`,
      method: 'put',
      data: data
    })
  }

//   /food-business-cert
// /water-hygiene-cert waterHygieneCert
export function getWaterHygieneCert() {
    return request({
      url: `/water-hygiene-cert`,
      method: 'get',
      data: data
    })
  }
  export function postWaterHygieneCert(data) {
    return request({
      url: `/water-hygiene-cert`,
      method: 'post',
      data: data
    })
  }
  export function getWaterHygieneCertDetail(id,data) {
    return request({
      url: `/water-hygiene-cert/${id}`,
      method: 'get',
      data: data
    })
  }
  export function putWaterHygieneCertId(id,data) {
    return request({
      url: `/water-hygiene-cert/${id}`,
      method: 'put',
      data: data
    })
  }