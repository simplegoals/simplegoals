(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SimpleGoals", [], factory);
	else if(typeof exports === 'object')
		exports["SimpleGoals"] = factory();
	else
		root["SimpleGoals"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(1);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(3)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// Module
exports.push([module.i, "[class^='simplegoals'], [class*=' simplegoals'],\n[class^='simplegoals'], [class*=' simplegoals']::before,\n[class^='simplegoals'], [class*=' simplegoals']::after {\n  /* Defaults */\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  border-width: 0;\n  border-style: none;\n  outline: none;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  box-sizing: border-box;\n  font-family: var(--simplegoals-font-family);\n  font-size: 1em;\n  font-weight: normal;\n}\n\n[class^='simplegoals']:focus, [class*=' simplegoals']:focus {\n  outline: none;\n  /* outline-style: solid;\n  outline-color: var(--simplegoals-color-primary); */\n}\n\n/* #region Achievement */\n\n.simplegoals-achievement {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  height: 6em;\n  top: 1em;\n  left: 1em;\n  background: var(--simplegoals-color-background);\n  border-radius: 3em;\n  box-shadow: 0em 0em 2em 0em rgba(0,0,0,0.3);\n  overflow: hidden;\n  transition: all .7s linear;\n  max-width: 6em;\n  transform: translateX(-12em) rotate(-180deg);\n  opacity: 0;\n  z-index: 1789;\n  font-size: 16px;\n}\n\n.simplegoals-achievement--opened {\n  -webkit-animation: simplegoals-achievement--open 2s ease-out both;\n          animation: simplegoals-achievement--open 2s ease-out both;\n  max-width: calc(640px - 2em);\n}\n\n@-webkit-keyframes simplegoals-achievement--open {\n  0% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(640px - 2em);\n    opacity: 1;\n  }\n}\n\n@keyframes simplegoals-achievement--open {\n  0% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(640px - 2em);\n    opacity: 1;\n  }\n}\n\n.simplegoals-achievement--closed {\n  -webkit-animation: simplegoals-achievement--close 2s ease-out both;\n          animation: simplegoals-achievement--close 2s ease-out both;\n}\n\n@-webkit-keyframes simplegoals-achievement--close {\n  0% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(640px - 2em);\n    opacity: 1;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n}\n\n@keyframes simplegoals-achievement--close {\n  0% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(640px - 2em);\n    opacity: 1;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n}\n\n.simplegoals-achievement__icon {\n  display: flex;\n  width: 6em;\n  height: 6em;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  transform: translateY(0);\n  transition: all .5s;\n}\n\n.simplegoals-achievement__icon img {\n  max-height: 3.5em;\n  max-width: 3.5em;\n}\n\n.simplegoals-achievement__body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex: 1 0 auto;\n  max-width: calc(640px - 6em - 2em - 8em - 2.5em);\n}\n\n.simplegoals-achievement__notification {\n  margin: 0;\n  padding: .1em;\n  font-size: 1em;\n  color: var(--simplegoals-color-subtitle);\n}\n\n.simplegoals-achievement__name {\n  margin: 0;\n  padding: .1em;\n  font-size: 1.2em;\n  font-weight: bold;\n  color: var(--simplegoals-color-title);\n}\n\n.simplegoals-achievement__button {\n  background-color: var(--simplegoals-color-primary);\n  display: flex;\n  font-size: 1em;\n  color: var(--simplegoals-color-opposite);\n  padding: 1em;\n  margin-left: 1em;\n  margin-right: 1.5em;\n  border-radius: 3em;\n  text-decoration: none;\n  cursor: pointer;\n  border: none;\n  flex: 1 0 auto;\n  max-width: 8em;\n  text-align: center;\n  justify-content: center;\n}\n\n.simplegoals-achievement__button:hover {\n  background-color: var(--simplegoals-color-primary-hover);\n}\n\n.simplegoals-achievement__close-button {\n  position: absolute;\n  background: none;\n  height: 2em;\n  width: 2em;\n  left: 2em;\n  top: 2em;\n  transform: translateY(-10em);\n  transition: all .5s;\n  cursor: pointer;\n  font-size: 1em;\n}\n\n.simplegoals-achievement__close-button svg {\n  height: 2em;\n  width: 2em;\n  stroke: #E53E3E;\n  transition: all .5s;\n  transform: rotate(0);\n}\n\n.simplegoals-achievement__close-button svg:hover {\n  transform: rotate(-90deg);\n}\n\n@media (min-width: 640px) and (hover: none) {\n  .simplegoals-achievement--clicked .simplegoals-achievement__icon {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement--clicked .simplegoals-achievement__close-button {\n    transform: translateY(0);\n  }\n}\n\n@media (min-width: 640px) and (hover: hover) {\n  .simplegoals-achievement:hover .simplegoals-achievement__icon {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement:hover .simplegoals-achievement__close-button {\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 639px) {\n  .simplegoals-achievement--opened {\n    -webkit-animation: simplegoals-achievement--open-mobile 2s ease-out both;\n            animation: simplegoals-achievement--open-mobile 2s ease-out both;\n    max-width: calc(100vw - 2em);\n  }\n\n  .simplegoals-achievement--closed {\n    -webkit-animation: simplegoals-achievement--close-mobile 2s ease-out both;\n            animation: simplegoals-achievement--close-mobile 2s ease-out both;\n  }\n\n  .simplegoals-achievement__body {\n    max-width: calc(100vw - 8em);\n    padding-right: 2em;\n    transition: all .5s;\n  }\n\n  .simplegoals-achievement__button {\n    position: absolute;\n    right: 0;\n    left: 4em;\n    max-width: none;\n    transform: translateY(-10em);\n    transition: all .5s;\n  }\n\n  .simplegoals-achievement--closed .simplegoals-achievement__button{\n    opacity: 0 !important;\n  }\n}\n\n@media (max-width: 639px) and (hover: none) {\n  .simplegoals-achievement--clicked .simplegoals-achievement__body {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement--clicked .simplegoals-achievement__button {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  .simplegoals-achievement--clicked .simplegoals-achievement__icon {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement--clicked .simplegoals-achievement__close-button {\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 639px) and (hover: hover) {\n  .simplegoals-achievement:hover .simplegoals-achievement__body {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement:hover .simplegoals-achievement__button {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  .simplegoals-achievement:hover .simplegoals-achievement__icon {\n    transform: translateY(10em);\n  }\n\n  .simplegoals-achievement:hover .simplegoals-achievement__close-button {\n    transform: translateY(0);\n  }\n}\n\n@-webkit-keyframes simplegoals-achievement--open-mobile {\n  0% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(100vw - 2em);\n    opacity: 1;\n  }\n}\n\n@keyframes simplegoals-achievement--open-mobile {\n  0% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(100vw - 2em);\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes simplegoals-achievement--close-mobile {\n  0% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(100vw - 2em);\n    opacity: 1;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n    display: none;\n  }\n}\n\n@keyframes simplegoals-achievement--close-mobile {\n  0% {\n    transform: translateX(0) rotate(0deg);\n    max-width: calc(100vw - 2em);\n    opacity: 1;\n  }\n  45% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  55% {\n    transform: translateX(0) rotate(0deg);\n    opacity: 1;\n    max-width: 6em;\n  }\n  100% {\n    transform: translateX(-12em) rotate(-180deg);\n    opacity: 0;\n    max-width: 6em;\n    display: none;\n  }\n}\n\n/* #endregion Achievement */\n\n/* #region Overview */\n\n.simplegoals-overview {\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0,0,0,.5);\n  font-size: 16px;\n  overflow: auto;\n  z-index: 1788;\n  opacity: 0;\n  transition: opacity .7s;\n  transform: translateY(100vh);\n}\n\n.simplegoals-overview--opened {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.simplegoals-overview__wrapper {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  padding: 10vh 1em;\n  transition: all .7s;\n  transform: translateY(100vh);\n}\n.simplegoals-overview--opened > .simplegoals-overview__wrapper {\n  transform: translateY(0);\n}\n\n.simplegoals-overview__body {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 2em;\n  border-radius: 3em;\n  width: 640px;\n  background-color: var(--simplegoals-color-background);\n}\n\n@media (max-width: 639px) {\n  .simplegoals-overview__body {\n    width: auto;\n  }\n}\n\n.simplegoals-overview__title {\n  font-size: 2em;\n  font-weight: bolder;\n  margin: .5em;\n  color: var(--simplegoals-color-title);\n}\n\n.simplegoals-overview__subtitle {\n  color: var(--simplegoals-color-subtitle);\n}\n\n.simplegoals-overview__goals {\n  margin: 1.5em 0;\n}\n\n.simplegoals-overview-goal {\n  display: flex;\n  align-items: center;\n}\n\n.simplegoals-overview-goal__icon {\n  display: flex;\n  margin-right: 1em;\n  height: 6em;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 auto;\n  transform: translateY(0);\n  transition: all .5s;\n}\n\n.simplegoals-overview-goal__icon img {\n  max-height: 3.5em;\n  max-width: 3.5em;\n}\n\n.simplegoals-overview-goal--locked .simplegoals-overview-goal__icon img {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n\n.simplegoals-overview-goal__body {\n  padding: .5em 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.simplegoals-overview-goal__name {\n  padding: .1em;\n  font-size: 1.2em;\n  font-weight: bolder;\n  color: var(--simplegoals-color-title);\n}\n\n.simplegoals-overview-goal__description {\n  padding: .1em;\n  font-size: 1em;\n  color: var(--simplegoals-color-subtitle);\n}\n\n.simplegoals-overview__close-button {\n  background-color: var(--simplegoals-color-primary);\n  font-size: 1em;\n  color: var(--simplegoals-color-opposite);\n  padding: 1em;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 1em;\n  border-radius: 3em;\n  min-width: 8em;\n  cursor: pointer;\n  text-align: center;\n}\n\n.simplegoals-overview__close-button:hover {\n  background-color: var(--simplegoals-color-primary-hover);\n}\n\n.simplegoals-overview__attribution {\n  font-size: .9em;\n  color: var(--simplegoals-color-subtitle);\n}\n\n.simplegoals-overview__attribution-link {\n  color: var(--simplegoals-color-primary);\n}\n\n.simplegoals-overview__attribution-link:hover, .simplegoals-overview__attribution-link:active {\n  color: var(--simplegoals-color-primary-hover);\n}\n\n/* #endregion Overview */", ""]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/modules/local-goals.js
var saveLocalGoal = function saveLocalGoal(name, options) {
  if (typeof Storage !== "undefined" && !options.freshStart) {
    var localGoals = getLocalGoals(options);
    localGoals.push(name);
    localStorage.setItem('simplegoals-storage', JSON.stringify(localGoals));
  }
};

var getLocalGoals = function getLocalGoals(options) {
  if (typeof Storage !== "undefined" && !options.freshStart) {
    return JSON.parse(localStorage.getItem('simplegoals-storage')) || [];
  } else {
    return [];
  }
};

var prepareGoals = function prepareGoals(options) {
  var goals = options.goals;
  var localGoals = getLocalGoals(options);

  for (var _i = 0, _Object$keys = Object.keys(goals); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    goals[key].unlocked = localGoals.includes(key);
  }

  return goals;
};
// CONCATENATED MODULE: ./src/modules/support.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiUrl = "https://api.simplegoals.co";
var postRequest =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(endpoint, data) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("".concat(apiUrl).concat(endpoint), {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 2:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 9;
              break;
            }

            _context.next = 6;
            return response.json();

          case 6:
            return _context.abrupt("return", _context.sent);

          case 9:
            return _context.abrupt("return", false);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var hashCode = function hashCode(source) {
  var hash = 0;

  if (source.length == 0) {
    return hash;
  }

  for (var i = 0; i < source.length; i++) {
    var _char = source.charCodeAt(i);

    hash = (hash << 5) - hash + _char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
};
// CONCATENATED MODULE: ./src/modules/cloud-storage.js
function cloud_storage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function cloud_storage_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cloud_storage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cloud_storage_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var saveCloudGoal =
/*#__PURE__*/
function () {
  var _ref = cloud_storage_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(name, options) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!options.useCloudStorage) {
              _context.next = 7;
              break;
            }

            data = {
              name: name
            };
            addAuthData(data, options);
            _context.next = 5;
            return postRequest("/goals/unlock", data);

          case 5:
            _context.next = 8;
            break;

          case 7:
            return _context.abrupt("return", false);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function saveCloudGoal(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var addAuthData = function addAuthData(hash, options) {
  hash.appId = options.appId;
  hash.user = options.user;
};

var loadFromCloud =
/*#__PURE__*/
function () {
  var _ref2 = cloud_storage_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(goals, options) {
    var data, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!options.useCloudStorage) {
              _context2.next = 9;
              break;
            }

            data = {
              goals: Object.keys(goals).map(function (key) {
                return {
                  name: key,
                  description: goals[key].description
                };
              }),
              unlockedGoals: Object.keys(goals).filter(function (key) {
                goals[key].unlocked;
              })
            };
            addAuthData(data, options);
            _context2.next = 5;
            return postRequest("/sessions", data);

          case 5:
            response = _context2.sent;

            if (response) {
              updateGoalsFromCloud(response, goals);
            }

            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", false);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function loadFromCloud(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

var updateGoalsFromCloud = function updateGoalsFromCloud(response, goals) {
  for (var _i = 0, _Object$keys = Object.keys(goals); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    goals[key].unlocked = response.unlockedGoals.includes(key);
  }
};
// CONCATENATED MODULE: ./src/modules/styles.js
var defaultStyleOptions = {
  fontFamily: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  background: '#ffffff',
  title: '#000000',
  subtitle: '#718096',
  primary: '#38b2ac',
  primaryHover: '#319795',
  opposite: '#ffffff'
};

var getStyles = function getStyles() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var styles = defaultStyleOptions;
  ['fontFamily', 'background', 'title', 'subtitle'].forEach(function (key) {
    if (options[key]) {
      styles[key] = options[key];
    }
  });

  if (options.primary) {
    styles.primary = options.primary;
    styles.primaryHover = getHover(options.primary);
    styles.opposite = getOpposite(options.primary);
  }

  ['primaryHover', 'opposite'].forEach(function (key) {
    if (options[key]) {
      styles[key] = options[key];
    }
  });
  return styles;
};

var getHover = function getHover(color) {
  var percent = 7;
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);
  R = parseInt(R * (100 - percent) / 100);
  G = parseInt(G * (100 - percent) / 100);
  B = parseInt(B * (100 - percent) / 100);
  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;
  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
  return "#" + RR + GG + BB;
};

var getOpposite = function getOpposite(hex) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  } // convert 3-digit hex to 6-digits.


  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }

  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16); // http://stackoverflow.com/a/3943023/112731

  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
};

var applyStyles = function applyStyles(element, options) {
  var styles = getStyles(options.theme);
  element.style.setProperty('--simplegoals-font-family', styles.fontFamily);
  element.style.setProperty('--simplegoals-color-background', styles.background);
  element.style.setProperty('--simplegoals-color-title', styles.title);
  element.style.setProperty('--simplegoals-color-subtitle', styles.subtitle);
  element.style.setProperty('--simplegoals-color-primary', styles.primary);
  element.style.setProperty('--simplegoals-color-primary-hover', styles.primaryHover);
  element.style.setProperty('--simplegoals-color-opposite', styles.opposite);
};
// CONCATENATED MODULE: ./src/modules/overview.js

var overview = null;
var initOverview = function initOverview(goals, options) {
  overview_createOverviewHtml(goals, options);
  overview = document.getElementById('simplegoals-overview');
  var trigger = document.getElementById('simplegoals-overview__close-button');
  trigger.addEventListener('click', function (event) {
    return hideOverview();
  });
};

var overview_createOverviewHtml = function createOverviewHtml(goals, options) {
  var overviewHtmlString = "\n  <div class=\"simplegoals-overview\" id=\"simplegoals-overview\">\n    <div class=\"simplegoals-overview__wrapper\">\n      <div class=\"simplegoals-overview__body\">\n        <h1 class=\"simplegoals-overview__title\">Achievements</h1>\n        <p class=\"simplegoals-overview__subtitle\">Complete tasks and unlock achievements</p>\n        <div class=\"simplegoals-overview__goals\" id=\"simplegoals-overview__goals\">\n        " + overviewGoalsHtml(goals) + "\n        </div>\n        <button class=\"simplegoals-overview__close-button\" id=\"simplegoals-overview__close-button\">\n          Close\n        </button>\n        <div class=\"simplegoals-overview__attribution\">\n          Powered by <a class=\"simplegoals-overview__attribution-link\" href=\"https://simplegoals.co\" target=\"_blank\">SimpleGoals</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
  var node = new DOMParser().parseFromString(overviewHtmlString, 'text/html').body.firstChild;
  applyStyles(node, options);
  document.body.appendChild(node);
};

var overviewGoalsHtml = function overviewGoalsHtml(goals) {
  var result = "";
  var sortedKeys = Object.keys(goals).sort(function (a, b) {
    return goals[b].unlocked - goals[a].unlocked;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sortedKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      result += "\n    <div class=\"simplegoals-overview-goal ".concat(goals[key].unlocked ? "" : "simplegoals-overview-goal--locked", "\">\n      <div class=\"simplegoals-overview-goal__icon\">\n        <img src=\"https://static.simplegoals.co/cup.svg\" />\n      </div>\n      <div class=\"simplegoals-overview-goal__body\">\n        <h3 class=\"simplegoals-overview-goal__name\">").concat(goals[key].name, "</h3>\n        <p class=\"simplegoals-overview-goal__description\">\n          ").concat(goals[key].description, "\n        </p>\n      </div>\n    </div>\n    ");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var rerenderOverviewGoals = function rerenderOverviewGoals(goals) {
  document.getElementById('simplegoals-overview__goals').innerHTML = overviewGoalsHtml(goals);
};
var showOverview = function showOverview() {
  if (!overview) {
    return;
  }

  overview.scrollTo(0, 0);
  overview.classList.add('simplegoals-overview--opened');
};

var hideOverview = function hideOverview() {
  overview.classList.remove('simplegoals-overview--opened');
};
// CONCATENATED MODULE: ./src/modules/achievements.js
function achievements_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function achievements_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { achievements_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { achievements_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var achievements_createAchievementHtml = function createAchievementHtml(key, goal, button, options) {
  var achievementHtmlString = "\n  <div class=\"simplegoals-achievement\" id=\"simplegoals-achievement-".concat(key, "\">\n    <div class=\"simplegoals-achievement__icon\">\n      <img src=\"https://static.simplegoals.co/cup.svg\" />\n    </div>\n    <div class=\"simplegoals-achievement__body\">\n      <p class=\"simplegoals-achievement__notification\">\n        New achievement unlocked\n      </p>\n      <p class=\"simplegoals-achievement__name\" id=\"simplegoals-achievement__name\">").concat(goal.name, "</p>\n    </div>\n    <div class=\"simplegoals-achievement__button\" id=\"simplegoals-achievement__button-").concat(key, "\" role=\"button\">").concat(button, "</div>\n    <button class=\"simplegoals-achievement__close-button\" id=\"simplegoals-achievement__close-button-").concat(key, "\">\n      <svg viewBox=\"0 0 500 500\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n          <path d=\"M50 50L450 450\" stroke-width=\"100\" stroke-linecap=\"round\"/>\n          <path d=\"M50 450L450 50\" stroke-width=\"100\" stroke-linecap=\"round\"/>\n        </g>\n      </svg>\n    </button>\n  </div>\n  ");
  var node = new DOMParser().parseFromString(achievementHtmlString, 'text/html').body.firstChild;
  applyStyles(node, options);
  document.body.appendChild(node);
  return node;
};

var recalculateAchievementsTop = function recalculateAchievementsTop() {
  var nodes = document.getElementsByClassName('simplegoals-achievement');

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.top = "".concat(1 + i * 7, "em");
  }
};

var achievements_showAchievement = function showAchievement(name, goal, options) {
  var key = hashCode(name);
  var achievement = achievements_createAchievementHtml(key, goal, 'Learn more', options);
  recalculateAchievementsTop();
  achievement.classList.add('simplegoals-achievement--opened');
  achievements_initAchievement(key, achievement);

  if (options.timeout) {
    achievementTimeout = setTimeout(function () {
      return hideAchievement(achievement);
    }, options.timeout);
  }
};

var achievements_initAchievement = function initAchievement(key, achievement) {
  achievement.addEventListener('click', function (event) {
    return achievement.classList.toggle('simplegoals-achievement--clicked');
  });
  var trigger = document.getElementById("simplegoals-achievement__close-button-".concat(key));
  trigger.addEventListener('click', function (event) {
    return hideAchievement(achievement);
  });
  var overviewTrigger = document.getElementById("simplegoals-achievement__button-".concat(key));
  overviewTrigger.addEventListener('click', function (event) {
    hideAchievement(achievement);
    setTimeout(showOverview, 200);
  });
};

var hideAchievement = function hideAchievement(achievement) {
  achievement.classList.remove('simplegoals-achievement--opened');
  achievement.classList.add('simplegoals-achievement--closed');
  setTimeout(function () {
    achievement.parentNode.removeChild(achievement);
    recalculateAchievementsTop();
  }, 2000);
};

var unlockGoal =
/*#__PURE__*/
function () {
  var _ref = achievements_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(name, goals, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!goals || !goals[name])) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            if (!goals[name].unlocked) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return");

          case 4:
            goals[name].unlocked = true;
            options.onGoalUnlock(name);
            saveLocalGoal(name, options);
            _context.next = 9;
            return saveCloudGoal(name, options);

          case 9:
            achievements_showAchievement(name, goals[name], options);
            rerenderOverviewGoals(goals);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function unlockGoal(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
// CONCATENATED MODULE: ./src/modules/buttons.js


var buttons_initButtons = function initButtons(goals, options) {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.simplegoalsUnlock) {
      event.preventDefault();
      unlockGoal(event.target.dataset.simplegoalsUnlock, goals, options);
    }

    if (event.target.dataset.simplegoalsOverview) {
      event.preventDefault();
      showOverview();
    }
  }, false);
};
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlock", function() { return unlock; });
/* concated harmony reexport showOverview */__webpack_require__.d(__webpack_exports__, "showOverview", function() { return showOverview; });
function src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function src_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { src_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(0);






var src_options = {
  timeout: 0,
  onGoalUnlock: function onGoalUnlock(goalKey) {},
  freshStart: false,
  useCloudStorage: false,
  appId: null,
  user: {}
};
var src_goals = null;
var init =
/*#__PURE__*/
function () {
  var _ref = src_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(config) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object.assign(src_options, config);
            src_goals = prepareGoals(src_options);
            _context.next = 4;
            return loadFromCloud(src_goals, src_options);

          case 4:
            initOverview(src_goals, src_options);
            buttons_initButtons(src_goals, src_options);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init(_x) {
    return _ref.apply(this, arguments);
  };
}();
var unlock =
/*#__PURE__*/
function () {
  var _ref2 = src_asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(name) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            unlockGoal(name, src_goals, src_options);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function unlock(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  init: init,
  unlock: unlock,
  showOverview: showOverview
});

/***/ })
/******/ ]);
});