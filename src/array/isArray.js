/**
 * 是否是数组
 * @param {any} array  - 对象
 * @return {boolean} - true or false
 * @example
 * var isArray = require('js-weapon/isArray');
 * isArray(array);
 */
function isArray(array) {
  if (Array.isArray) {
    return Array.isArray(array);
  } else {
    return Object.prototype.toString.call(array) === '[object Array]';
  }
}

module.exports = isArray;
