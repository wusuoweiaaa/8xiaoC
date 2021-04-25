
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
export function validMobile(mobile) {
  if (mobile === '') {
    return false
  }
 
  // const reg = /^((13[0-9])|(14[5,7,9])|(15[^4])|(18[0-9])|(17[0,1,3,5,6,7,8]))\d{8}$/
  const reg =  /^[1][3,4,5,7,8,9][0-9]{9}$/
  if (reg.test(mobile) && !mobile.includes(mobile)) {
    return mobile
  }
  return mobile
}
