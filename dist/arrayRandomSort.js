/**
 * 对数组进行随机排序
 * @param {Array} array  - 要排序的数组
 * @return {Array} - 排序后的数组
 * @example
 * var arrayRandomSort = require('./arrayRandomSort');
 * var array = [1,2,3];
 * arrayRandomSort(array);
 * console.log(array);
 */
function arrayRandomSort(array) {
  return array.sort(function (a, b) {
    //用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
    return Math.random() > 0.5 ? -1 : 1;
  });
}

module.exports = arrayRandomSort;
