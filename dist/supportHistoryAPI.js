/**
 * 是否支持 新的 history  API
 * @example
 * var supportHistoryAPI = require('./supportHistoryAPI');
 * supportHistoryAPI();
 */
function supportHistoryAPI() {
    return !!(window.history && history.pushState);
}

module.exports = supportHistoryAPI;
