/**
* 是否在支付宝客户端内运行
* @return {boolean} - true or false
* @example
* var isAlipay = require('./isAlipay');
* isAlipay();
* */
function isAlipay() {
  return /AlipayClient/i.test(navigator.userAgent);
}

module.exports = isAlipay;
