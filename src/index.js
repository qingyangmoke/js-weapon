const arrayEqual = require('./array/arrayEqual');
const elementInViewport = require('./dom/elementInViewport');

function say() {
  console.log('hello world');
}

module.exports = {
  say,
  elementInViewport,
  arrayEqual,
};
