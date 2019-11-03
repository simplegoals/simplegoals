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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
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