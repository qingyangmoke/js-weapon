/**
 * 是否支持Web Worker
 * @return {boolean} - true or false
 * @example
 * var supportWorker = require('./supportWorker');
 * supportWorker();
 */
function supportWorker() {
  return !!window['Worker'];
}

module.exports = supportWorker;
