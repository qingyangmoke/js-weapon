/**
 * 是否支持 File API
 * @return {boolean} - true or false
 * @example
 * var supportFileAPI = require('./supportFileAPI');
 * supportFileAPI();
 */
function supportFileAPI() {
  return !!window['File'] && !!window['FileReader'] && !!window['FileList'] && !!window['Blob'];
}

module.exports = supportFileAPI;
