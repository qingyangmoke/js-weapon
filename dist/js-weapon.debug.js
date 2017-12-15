/*!
 * js-weapon
 * Description:js 常用代码库
 * Author: 清扬陌客
 * Version: v0.0.1
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

	function say() {
	  console.log('hello world');
	}

	module.exports = {
	  say: say,
	  elementInViewport: elementInViewport,
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

/***/ })
/******/ ])
});
;