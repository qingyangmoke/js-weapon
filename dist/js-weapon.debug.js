/*!
 * js-weapon
 * Description:js 常用代码库
 * Author: 清扬陌客
 * Version: v0.0.2
 * Github: https://github.com/qingyangmoke/js-weapon.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSWeapon"] = factory();
	else
		root["JSWeapon"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/song/Develop/github/js-weapon/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var arrayEqual = __webpack_require__(2);
	var elementInViewport = __webpack_require__(3);
	var queryString = __webpack_require__(4);

	function say() {
	  console.log('hello world');
	}

	module.exports = {
	  say: say,

	  elementInViewport: elementInViewport,

	  queryString: queryString,

	  arrayEqual: arrayEqual
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * @desc 判断两个数组是否相等
	 * @param {Array} arr1 - 数组1
	 * @param {Array} arr2 - 数组2
	 * @return {Boolean} - true 相等 false不相等
	 * @see 代码改在摘自 - https://github.com/proYang/outils
	 * @example
	 * var arrayEqual = require('js-weapon/arrayEqual');
	 * arrayEqual([1,2,3],[1,2,3]);
	 */
	function arrayEqual(arr1, arr2) {
	  if (arr1 === arr2) return true;
	  if (arr1.length !== arr2.length) return false;
	  for (var i = arr1.length - 1; i >= 0; i--) {
	    if (arr1[i] !== arr2[i]) return false;
	  }
	  return true;
	}

	module.exports = arrayEqual;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * 判断某个dom元素是否可视区域
	 * @param {HTMLElement} el - 要判断的dom元素 支持jQuery对象
	 * @param {Boolean} [allInViewport=false] - 是否严格要求全部在viewport true 必须全部在viewport里才算是在viewport中 false 有一小部分在viewport就算是在
	 * @param {number} [diff=0] - 允许多少误差 正数
	 * @see http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
	 * @example
	 * var elementInViewport = require('js-weapon/elementInViewport');
	 * elementInViewport(el);
	 */
	function elementInViewport(el) {
	  var allInViewport = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var diff = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	  if (!el) return false;
	  allInViewport = allInViewport || false;
	  diff = diff || 0;
	  var rect = el.getBoundingClientRect();
	  var w = rect.right - rect.left;
	  var h = rect.bottom - rect.top;
	  var screenWidth = window.innerWidth || document.documentElement.clientWidth; /*or $(window).height() */
	  var screenHeight = window.innerHeight || document.documentElement.clientHeight; /*or $(window).width() */
	  if (allInViewport) {
	    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= screenHeight && rect.right <= screenWidth;
	  } else {
	    return rect.top > -h - diff && rect.left > -w - diff && rect.top < screenHeight + diff && rect.left < screenWidth + diff;
	  }
	}

	module.exports = elementInViewport;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * 获取地址参数
	 * @param {string} name - 参数名字
	 * @param {string} [defaultValue=''] - 默认值
	 * @param {string} [url=null] - 地址
	 * @return {string}  - 如果存在name的参数返回实际的参数值，否则返回defaultValue或者空字符
	 * @example
	 * var queryString = require('js-weapon/queryString');
	 * var from = queryString('from');
	 */
	function queryString() {
	  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  if (name === '') return defaultValue;
	  url = url || location.search;
	  /* eslint-disable */
	  var result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	  if (result == null || result.length < 1) {
	    return defaultValue;
	  }
	  return result[1];
	}

	module.exports = queryString;

/***/ })
/******/ ])
});
;