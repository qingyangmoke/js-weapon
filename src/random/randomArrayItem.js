const randomNumber = require('./randomNumber');
const isArray = require('../array/isArray');
/**
 * 从数组中随机取一个项
 * @param {Array} arr - 最小值
 * @return {any}
 * @example
 * var randomArrayItem = require('js-weapon/randomArrayItem');
 * randomArrayItem([1,2,3,4]);
 */
function randomArrayItem(arr) {
  if (!isArray(arr)) return arr;
  const len = arr.length;
  if (len === 0) return null;
  if (len === 1) return arr[0];
  return arr[randomNumber(0, len - 1)];
}

module.exports = randomArrayItem;

