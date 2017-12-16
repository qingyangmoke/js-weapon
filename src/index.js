const arrayEqual = require('./array/arrayEqual');
const elementInViewport = require('./dom/elementInViewport');
const queryString = require('./url/queryString');

function say() {
  console.log('hello world');
}

module.exports = {
  say,

  elementInViewport,

  queryString,

  arrayEqual,
};
