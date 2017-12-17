/**
 * 是否包含一个位标示
 * @param {number} source
 * @param {number} flag
 * @return {boolean}
 * @example
 * var hasFlag = require('./hasFlag');
 * hasFlag(3,2);
 */
function hasFlag(source, flag) {
  if (source <= 0) return false;
  return (source & flag) === flag;
}

module.exports = hasFlag;
