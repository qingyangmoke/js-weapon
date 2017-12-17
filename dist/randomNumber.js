/**
 * 去 >=min <=max 之间的随机数
 * @param {Number} min - 最小值
 * @param {Number} max  - 最大值
 * @return {Number}
 * @example
 * var randomNumber = require('./randomNumber');
 * randomNumber(0，100);
 */
function randomNumber(min, max) {
  if (min > max) {
    const t = min;
    min = max;
    max = t;
  }
  const range = max - min;
  const v = (min + Math.round(Math.random() * range));
  return Math.max(min, Math.min(max, v));
}

module.exports = randomNumber;
