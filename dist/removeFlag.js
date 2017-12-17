/**
 * 删除一个位标示
 * @param {number} source - 目标的数字
 * @param {number} flag - 要删除的flag
 * @return {number}
 * @example
 * var removeFlag = require('./removeFlag');
 * removeFlag(3,2);
 */
function removeFlag(source, flag) {
  if (source <= 0) return source;
  return source ^ flag;
}

module.exports = removeFlag;
