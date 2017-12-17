const arrayEqual = require('./array/arrayEqual');
const elementInViewport = require('./dom/elementInViewport');
const queryString = require('./url/queryString');

function helloWorld() {
  console.log('hello world');
}

if (DEBUG) {
  console.log('hello DEBUG' + process.env.NODE_ENV);
}

module.exports = {
  version: '__PKG_VERSION__',

  helloWorld,

  elementInViewport,

  queryString,

  arrayEqual,
};
