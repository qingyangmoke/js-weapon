/**
 * 是否支持Web Socket
 * @return {boolean} - true or false
 * @example
 * var supportWebSocket = require('js-weapon/supportWebSocket');
 * supportWebSocket();
 */
function supportWebSocket() {
  return 'WebSocket' in window || 'MozWebSocket' in window;
}

module.exports = supportWebSocket;
