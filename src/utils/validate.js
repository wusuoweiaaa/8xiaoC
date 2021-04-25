/*
 * @Author       : WuWei
 * @LastEditors  : WuWei
 * @Date         : 2019-11-02 20:14:08
 * @LastEditTime : 2021-04-25 19:27:55
 * @FilePath     : /8xiaoC/src/utils/validate.js
 * @Description  : Do not edit
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} mobile 
 */
export const validMobile = value => {
  return /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value)
}


/**
 * @description 校验身份证18位
 * @param string value 值
 */
export const validateCert = value => {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)
}

