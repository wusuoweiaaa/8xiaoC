/*
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2021-04-25 20:47:09
 * @LastEditTime : 2021-04-27 21:10:34
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
  export function getPublicCertDetail(id) {
    return request({
      url: `/public-hygiene-cert/${id}`,
      method: 'get',
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
  export function getFoodBusinessCertDetail(id) {
    return request({
      url: `/food-business-cert/${id}`,
      method: 'get',
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
  export function getWaterHygieneCertDetail(id) {
    return request({
      url: `/water-hygiene-cert/${id}`,
      method: 'get',
    })
  }
  export function putWaterHygieneCertId(id,data) {
    return request({
      url: `/water-hygiene-cert/${id}`,
      method: 'put',
      data: data
    })
  }

  export function patchMobile(id,data) {
    return request({
      url: `/users/${id}`,
      method: 'patch',
      data: data
    })
  }


  export function postWaterQualityReport(data) {
    return request({
      url: `/waterQualityReport`,
      method: 'post',
      data: data
    })
  }
  export function getWaterQualityReportDetail(id) {
    return request({
      url: `/waterQualityReport/${id}`,
      method: 'get',
    })
  }
  export function putWaterQualityReportId(id,data) {
    return request({
      url: `/waterQualityReport/${id}`,
      method: 'put',
      data: data
    })
  }


  export function postAirQualityReport(data) {
    return request({
      url: `/airQualityReport`,
      method: 'post',
      data: data
    })
  }
  export function getAirQualityReportDetail(id) {
    return request({
      url: `/airQualityReport/${id}`,
      method: 'get',
    })
  }
  export function putAirQualityReportId(id,data) {
    return request({
      url: `/airQualityReport/${id}`,
      method: 'put',
      data: data
    })
  }

  export function postPublicHygienicReport(data) {
    return request({
      url: `/publicHygienicReport`,
      method: 'post',
      data: data
    })
  }
  export function getPublicHygienicReportDetail(id) {
    return request({
      url: `/publicHygienicReport/${id}`,
      method: 'get',
    })
  }
  export function putPublicHygienicReportId(id,data) {
    return request({
      url: `/publicHygienicReport/${id}`,
      method: 'put',
      data: data
    })
  }