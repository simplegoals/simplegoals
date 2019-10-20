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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlock", function() { return unlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOverview", function() { return showOverview; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

__webpack_require__(1);

var apiUrl = "https://api.simplegoals.co";
var options = {
  timeout: 0,
  onGoalUnlock: function onGoalUnlock(goalKey) {},
  freshStart: false,
  useCloudStorage: false,
  appId: null,
  user: {}
};
var goals = null;
var overview = null;

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

var saveLocalGoal = function saveLocalGoal(name) {
  if (typeof Storage !== "undefined" && !options.freshStart) {
    var localGoals = getLocalGoals();
    localGoals.push(name);
    localStorage.setItem('simplegoals-storage', JSON.stringify(localGoals));
  }
};

var getLocalGoals = function getLocalGoals() {
  if (typeof Storage !== "undefined" && !options.freshStart) {
    return JSON.parse(localStorage.getItem('simplegoals-storage')) || [];
  } else {
    return [];
  }
};

var saveCloudGoal =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(name) {
    var data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!options.useCloudStorage) {
              _context2.next = 7;
              break;
            }

            data = {
              name: name
            };
            addAuthData(data);
            _context2.next = 5;
            return postRequest("/goals/unlock", data);

          case 5:
            _context2.next = 8;
            break;

          case 7:
            return _context2.abrupt("return", false);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function saveCloudGoal(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var setOptions = function setOptions(config) {
  Object.assign(options, config);
};

var addAuthData = function addAuthData(hash) {
  hash.appId = options.appId;
  hash.user = options.user;
};

var loadFromCloud =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3() {
    var data, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!options.useCloudStorage) {
              _context3.next = 9;
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
            addAuthData(data);
            _context3.next = 5;
            return postRequest("/sessions", data);

          case 5:
            response = _context3.sent;

            if (response) {
              updateGoalsFromCloud(response);
            }

            _context3.next = 10;
            break;

          case 9:
            return _context3.abrupt("return", false);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function loadFromCloud() {
    return _ref3.apply(this, arguments);
  };
}();

var prepareGoals = function prepareGoals(config) {
  goals = config.goals;
  var localGoals = getLocalGoals();

  for (var _i = 0, _Object$keys = Object.keys(goals); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    goals[key].unlocked = localGoals.includes(key);
  }
};

var updateGoalsFromCloud = function updateGoalsFromCloud(response) {
  for (var _i2 = 0, _Object$keys2 = Object.keys(goals); _i2 < _Object$keys2.length; _i2++) {
    var key = _Object$keys2[_i2];
    goals[key].unlocked = response.unlockedGoals.includes(key);
  }
};

var recalculateAchievementsTop = function recalculateAchievementsTop() {
  var nodes = document.getElementsByClassName('simplegoals-achievement');

  for (var i = 0; i < nodes.length; i++) {
    nodes[i].style.top = "".concat(1 + i * 7, "em");
  }
};

var createAchievementHtml = function createAchievementHtml(key, goal, button) {
  var achievementHtmlString = "\n  <div class=\"simplegoals-achievement\" id=\"simplegoals-achievement-".concat(key, "\">\n    <div class=\"simplegoals-achievement__icon\">\n      <img src=\"https://static.simplegoals.co/cup.svg\" />\n    </div>\n    <div class=\"simplegoals-achievement__body\">\n      <p class=\"simplegoals-achievement__notification\">\n        New achievement unlocked\n      </p>\n      <p class=\"simplegoals-achievement__name\" id=\"simplegoals-achievement__name\">").concat(goal.name, "</p>\n    </div>\n    <div class=\"simplegoals-achievement__button\" id=\"simplegoals-achievement__button-").concat(key, "\" role=\"button\">").concat(button, "</div>\n    <button class=\"simplegoals-achievement__close-button\" id=\"simplegoals-achievement__close-button-").concat(key, "\">\n      <svg viewBox=\"0 0 500 500\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g>\n          <path d=\"M50 50L450 450\" stroke-width=\"100\" stroke-linecap=\"round\"/>\n          <path d=\"M50 450L450 50\" stroke-width=\"100\" stroke-linecap=\"round\"/>\n        </g>\n      </svg>\n    </button>\n  </div>\n  ");
  var node = new DOMParser().parseFromString(achievementHtmlString, 'text/html').body.firstChild;
  var box = document.getElementById("simplegoals-overview-box");
  document.body.appendChild(node);
  return node;
};

var overviewGoalsHtml = function overviewGoalsHtml() {
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

var createOverviewHtml = function createOverviewHtml() {
  var overviewHtmlString = "\n  <div class=\"simplegoals-overview\" id=\"simplegoals-overview\">\n    <div class=\"simplegoals-overview__wrapper\">\n      <div class=\"simplegoals-overview__body\">\n        <h1 class=\"simplegoals-overview__title\">Achievements</h1>\n        <p class=\"simplegoals-overview__subtitle\">Complete tasks and unlock achievements</p>\n        <div class=\"simplegoals-overview__goals\" id=\"simplegoals-overview__goals\">\n        " + overviewGoalsHtml() + "\n        </div>\n        <button class=\"simplegoals-overview__close-button\" id=\"simplegoals-overview__close-button\">\n          Close\n        </button>\n        <div class=\"simplegoals-overview__attribution\">\n          Powered by <a class=\"simplegoals-overview__attribution-link\" href=\"https://simplegoals.co\" target=\"_blank\">SimpleGoals</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  ";
  var node = new DOMParser().parseFromString(overviewHtmlString, 'text/html').body.firstChild;
  document.body.appendChild(node);
};

var rerenderOverviewGoals = function rerenderOverviewGoals() {
  document.getElementById('simplegoals-overview__goals').innerHTML = overviewGoalsHtml();
};

var createDOMElements = function createDOMElements() {
  createOverviewHtml();
};

var showAchievement = function showAchievement(name, goal) {
  var key = hashCode(name);
  var achievement = createAchievementHtml(key, goal, 'Learn more');
  recalculateAchievementsTop();
  achievement.classList.add('simplegoals-achievement--opened');
  initAchievement(key, achievement);

  if (options.timeout) {
    achievementTimeout = setTimeout(function () {
      return hideAchievement(achievement);
    }, options.timeout);
  }
};

var hideAchievement = function hideAchievement(achievement) {
  achievement.classList.remove('simplegoals-achievement--opened');
  achievement.classList.add('simplegoals-achievement--closed');
  setTimeout(function () {
    achievement.parentNode.removeChild(achievement);
    recalculateAchievementsTop();
  }, 2000);
};

var hideOverview = function hideOverview() {
  overview.classList.remove('simplegoals-overview--opened');
};

var initAchievement = function initAchievement(key, achievement) {
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

var initOverview = function initOverview() {
  overview = document.getElementById('simplegoals-overview');
  var trigger = document.getElementById('simplegoals-overview__close-button');
  trigger.addEventListener('click', function (event) {
    return hideOverview();
  });
};

var initButtons = function initButtons() {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.simplegoalsUnlock) {
      event.preventDefault();
      unlock(event.target.dataset.simplegoalsUnlock);
    }

    if (event.target.dataset.simplegoalsOverview) {
      event.preventDefault();
      showOverview();
    }
  }, false);
};

var init =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(config) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            setOptions(config);
            prepareGoals(config);
            _context4.next = 4;
            return loadFromCloud();

          case 4:
            createDOMElements();
            initOverview();
            initButtons();

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function init(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var unlock =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(name) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!(!goals || !goals[name])) {
              _context5.next = 2;
              break;
            }

            return _context5.abrupt("return");

          case 2:
            if (!goals[name].unlocked) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return");

          case 4:
            goals[name].unlocked = true;
            options.onGoalUnlock(name);
            saveLocalGoal(name);
            _context5.next = 9;
            return saveCloudGoal(name);

          case 9:
            showAchievement(name, goals[name]);
            rerenderOverviewGoals();

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function unlock(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
var showOverview = function showOverview() {
  if (!overview) {
    return;
  }

  overview.scrollTo(0, 0);
  overview.classList.add('simplegoals-overview--opened');
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  unlock: unlock,
  showOverview: showOverview
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ]);
});