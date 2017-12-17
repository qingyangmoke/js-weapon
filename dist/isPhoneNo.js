/**
 *  判断字符串是否是手机号
 * @param {String} value - 对象
 * @return {Boolean}  - true or false
 * @example
 * var isPhoneNo = require('./isPhoneNo');
 * isPhoneNo('+8613800000000');
*/
function isPhoneNo(value) {
  return /^(0|(\+?86)|17951)?(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/.test(this);
}

module.exports = isPhoneNo;
