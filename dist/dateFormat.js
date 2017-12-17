/**
* 格式化输出日期对象
* @param {Date} date  - 日期对象
* @param {String} fmt  - 字符串 如 yyyy-MM-dd hh:mm:ss.
* @return {String}
* @example
* var arrayRandomSort = require('./arrayRandomSort');
* arrayRandomSort(new Date(),"yyyy-MM-dd hh:mm:ss.S") // 2017-12-16 08:09:04.423
* arrayRandomSort(new Date(),"yyyy-M-d h:m:s.S")      // 2017-12-16 8:9:4.18
* arrayRandomSort(new Date(),"yyyy.MM月dd日")      // 2017.12月16日
*/
function dateFormat(date, fmt) {
  const o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    'S': date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
}

module.exports = dateFormat;

