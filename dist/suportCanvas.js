/**
 * 是否支持 canavs
 * @return {boolean} - true or false
 * @example
 * var suportCanavs = require('./suportCanavs');
 * suportCanavs();
 */
function suportCanavs() {
  return !!window['CanvasRenderingContext2D'];
}

module.exports = suportCanavs;
