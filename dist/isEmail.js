/**
 *  判断字符串是否是邮箱地址
 * @param {String} value - 对象
 * @return {Boolean}  - true or false
 * @example
 * var isEmail = require('./isEmail');
 * isEmail('test@js-weapon.com');
*/
function isEmail(value) {
  /* eslint-disable no-useless-escape */
  return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(this);
}

module.exports = isEmail;
