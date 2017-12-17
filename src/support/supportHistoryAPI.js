/**
 * 是否支持 新的 history  API
 * @example
 * var supportHistoryAPI = require('js-weapon/supportHistoryAPI');
 * supportHistoryAPI();
 */
function supportHistoryAPI() {
    return !!(window.history && history.pushState);
}

module.exports = supportHistoryAPI;
