/**
 * @desc 判断两个数组是否相等
 * @param {Array} arr1 - 数组1
 * @param {Array} arr2 - 数组2
 * @return {Boolean} - true 相等 false不相等
 * @see 代码改在摘自 - https://github.com/proYang/outils
 */
function arrayEqual(arr1, arr2) {
  if (arr1 === arr2) return true;
  if (arr1.length !== arr2.length) return false;
  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = arrayEqual;
