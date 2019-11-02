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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: init, unlock, showOverview, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlock", function() { return unlock; });
/* harmony import */ var _modules_local_goals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/local-goals */ "./src/modules/local-goals.js");
/* harmony import */ var _modules_cloud_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cloud-storage */ "./src/modules/cloud-storage.js");
/* harmony import */ var _modules_overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/overview */ "./src/modules/overview.js");
/* harmony import */ var _modules_achievements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/achievements */ "./src/modules/achievements.js");
/* harmony import */ var _modules_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/buttons */ "./src/modules/buttons.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showOverview", function() { return _modules_overview__WEBPACK_IMPORTED_MODULE_2__["showOverview"]; });

__webpack_require__ (/*! ./index.css */ "./src/index.css")







let options = {
  timeout: 0,
  onGoalUnlock: (goalKey) => {},
  freshStart: false,
  useCloudStorage: false,
  appId: null,
  user: {}
}
let goals = null

const init = async config => {
  Object.assign(options, config)
  goals = Object(_modules_local_goals__WEBPACK_IMPORTED_MODULE_0__["prepareGoals"])(options)
  await Object(_modules_cloud_storage__WEBPACK_IMPORTED_MODULE_1__["loadFromCloud"])(goals, options)
  Object(_modules_overview__WEBPACK_IMPORTED_MODULE_2__["initOverview"])(goals)
  Object(_modules_buttons__WEBPACK_IMPORTED_MODULE_4__["initButtons"])(goals, options)
}

const unlock = async (name) => {
  Object(_modules_achievements__WEBPACK_IMPORTED_MODULE_3__["unlockGoal"])(name, goals, options)
}



/* harmony default export */ __webpack_exports__["default"] = ({init, unlock, showOverview: _modules_overview__WEBPACK_IMPORTED_MODULE_2__["showOverview"]});


/***/ }),

/***/ "./src/modules/achievements.js":
/*!*************************************!*\
  !*** ./src/modules/achievements.js ***!
  \*************************************/
/*! exports provided: unlockGoal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlockGoal", function() { return unlockGoal; });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "./src/modules/support.js");
/* harmony import */ var _local_goals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-goals */ "./src/modules/local-goals.js");
/* harmony import */ var _cloud_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloud-storage */ "./src/modules/cloud-storage.js");
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview */ "./src/modules/overview.js");





const createAchievementHtml = (key, goal, button) => {
  const achievementHtmlString = `
  <div class="simplegoals-achievement" id="simplegoals-achievement-${key}">
    <div class="simplegoals-achievement__icon">
      <img src="https://static.simplegoals.co/cup.svg" />
    </div>
    <div class="simplegoals-achievement__body">
      <p class="simplegoals-achievement__notification">
        New achievement unlocked
      </p>
      <p class="simplegoals-achievement__name" id="simplegoals-achievement__name">${goal.name}</p>
    </div>
    <div class="simplegoals-achievement__button" id="simplegoals-achievement__button-${key}" role="button">${button}</div>
    <button class="simplegoals-achievement__close-button" id="simplegoals-achievement__close-button-${key}">
      <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M50 50L450 450" stroke-width="100" stroke-linecap="round"/>
          <path d="M50 450L450 50" stroke-width="100" stroke-linecap="round"/>
        </g>
      </svg>
    </button>
  </div>
  `
  const node = new DOMParser().parseFromString(achievementHtmlString , 'text/html').body.firstChild
  document.body.appendChild(node)
  return node
}

const recalculateAchievementsTop = () => {
  const nodes = document.getElementsByClassName('simplegoals-achievement')
  for(let i=0; i < nodes.length; i++) {
    nodes[i].style.top = `${1 + i*7}em`
  }
}

const showAchievement = (name, goal, options) => {
  const key = Object(_support__WEBPACK_IMPORTED_MODULE_0__["hashCode"])(name)
  const achievement = createAchievementHtml(key, goal, 'Learn more')
  recalculateAchievementsTop()
  achievement.classList.add('simplegoals-achievement--opened')
  initAchievement(key, achievement)
  if (options.timeout) {
    achievementTimeout = setTimeout(() => hideAchievement(achievement), options.timeout)
  }
}

const initAchievement = (key, achievement) => {
  achievement.addEventListener('click', event => achievement.classList.toggle('simplegoals-achievement--clicked'))
  const trigger = document.getElementById(`simplegoals-achievement__close-button-${key}`)
  trigger.addEventListener('click', event => hideAchievement(achievement))
  const overviewTrigger = document.getElementById(`simplegoals-achievement__button-${key}`)
  overviewTrigger.addEventListener('click', event => {
    hideAchievement(achievement)
    setTimeout(_overview__WEBPACK_IMPORTED_MODULE_3__["showOverview"], 200)
  })
}

const hideAchievement = (achievement) => {
  achievement.classList.remove('simplegoals-achievement--opened')
  achievement.classList.add('simplegoals-achievement--closed')
  setTimeout(() => {
    achievement.parentNode.removeChild(achievement)
    recalculateAchievementsTop()
  }, 2000)
}

const unlockGoal = async (name, goals, options) => {
  if(!goals || !goals[name]) { return }
  if(goals[name].unlocked){
    return
  }
  goals[name].unlocked = true
  options.onGoalUnlock(name)
  Object(_local_goals__WEBPACK_IMPORTED_MODULE_1__["saveLocalGoal"])(name, options)
  await Object(_cloud_storage__WEBPACK_IMPORTED_MODULE_2__["saveCloudGoal"])(name, options)
  showAchievement(name, goals[name], options)
  Object(_overview__WEBPACK_IMPORTED_MODULE_3__["rerenderOverviewGoals"])(goals)
}

/***/ }),

/***/ "./src/modules/buttons.js":
/*!********************************!*\
  !*** ./src/modules/buttons.js ***!
  \********************************/
/*! exports provided: initButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initButtons", function() { return initButtons; });
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview */ "./src/modules/overview.js");
/* harmony import */ var _achievements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./achievements */ "./src/modules/achievements.js");



const initButtons = (goals, options) => {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.simplegoalsUnlock) {
      event.preventDefault()
      Object(_achievements__WEBPACK_IMPORTED_MODULE_1__["unlockGoal"])(event.target.dataset.simplegoalsUnlock, goals, options)
    }
    if (event.target.dataset.simplegoalsOverview) {
      event.preventDefault()
      Object(_overview__WEBPACK_IMPORTED_MODULE_0__["showOverview"])();
    }
  }, false);
}

/***/ }),

/***/ "./src/modules/cloud-storage.js":
/*!**************************************!*\
  !*** ./src/modules/cloud-storage.js ***!
  \**************************************/
/*! exports provided: saveCloudGoal, loadFromCloud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCloudGoal", function() { return saveCloudGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFromCloud", function() { return loadFromCloud; });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ "./src/modules/support.js");


const saveCloudGoal = async (name, options) => {
  if (options.useCloudStorage) {
    let data = {
      name: name
    }
    addAuthData(data, options)
    await Object(_support__WEBPACK_IMPORTED_MODULE_0__["postRequest"])("/goals/unlock", data)
  } else {
    return false
  }
}

const addAuthData = (hash, options) => {
  hash.appId = options.appId
  hash.user = options.user
}

const loadFromCloud = async (goals, options) => {
  if (options.useCloudStorage) {
    let data = {
      goals: Object.keys(goals).map((key) => {
        return {
          name: key,
          description: goals[key].description
        }
      }),
      unlockedGoals: Object.keys(goals).filter((key) => {
        goals[key].unlocked
      })
    }
    addAuthData(data, options)
    const response = await Object(_support__WEBPACK_IMPORTED_MODULE_0__["postRequest"])("/sessions", data)
    if (response) {
      updateGoalsFromCloud(response, goals)
    }
  } else {
    return false
  }
}

const updateGoalsFromCloud = (response, goals) => {
  for (const key of Object.keys(goals)) {
    goals[key].unlocked = response.unlockedGoals.includes(key)
  }
}

/***/ }),

/***/ "./src/modules/local-goals.js":
/*!************************************!*\
  !*** ./src/modules/local-goals.js ***!
  \************************************/
/*! exports provided: saveLocalGoal, prepareGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLocalGoal", function() { return saveLocalGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareGoals", function() { return prepareGoals; });
const saveLocalGoal = (name, options) => {
  if (typeof(Storage) !== "undefined" && !options.freshStart) {
    let localGoals = getLocalGoals(options)
    localGoals.push(name)
    localStorage.setItem('simplegoals-storage', JSON.stringify(localGoals))
  }
}

const getLocalGoals = (options) => {
  if (typeof(Storage) !== "undefined" && !options.freshStart) {
    return JSON.parse(localStorage.getItem('simplegoals-storage')) || []
  } else {
    return []
  }
}

const prepareGoals = (options) => {
  let goals = options.goals
  const localGoals = getLocalGoals(options)
  for (const key of Object.keys(goals)) {
    goals[key].unlocked = localGoals.includes(key)
  }
  return goals
}

/***/ }),

/***/ "./src/modules/overview.js":
/*!*********************************!*\
  !*** ./src/modules/overview.js ***!
  \*********************************/
/*! exports provided: initOverview, rerenderOverviewGoals, showOverview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOverview", function() { return initOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerenderOverviewGoals", function() { return rerenderOverviewGoals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showOverview", function() { return showOverview; });
let overview = null

const initOverview = (goals) => {
  createOverviewHtml(goals)
  overview = document.getElementById('simplegoals-overview')
  const trigger = document.getElementById('simplegoals-overview__close-button')
  trigger.addEventListener('click', event => hideOverview())
}

const createOverviewHtml = (goals) => {
  const overviewHtmlString = `
  <div class="simplegoals-overview" id="simplegoals-overview">
    <div class="simplegoals-overview__wrapper">
      <div class="simplegoals-overview__body">
        <h1 class="simplegoals-overview__title">Achievements</h1>
        <p class="simplegoals-overview__subtitle">Complete tasks and unlock achievements</p>
        <div class="simplegoals-overview__goals" id="simplegoals-overview__goals">
        ` + overviewGoalsHtml(goals) + `
        </div>
        <button class="simplegoals-overview__close-button" id="simplegoals-overview__close-button">
          Close
        </button>
        <div class="simplegoals-overview__attribution">
          Powered by <a class="simplegoals-overview__attribution-link" href="https://simplegoals.co" target="_blank">SimpleGoals</a>
        </div>
      </div>
    </div>
  </div>
  `
  const node = new DOMParser().parseFromString(overviewHtmlString , 'text/html').body.firstChild
  document.body.appendChild(node)
}

const overviewGoalsHtml = (goals) => {
  let result = "";
  const sortedKeys = Object.keys(goals).sort((a, b) => goals[b].unlocked - goals[a].unlocked)
  for (const key of sortedKeys) {
    result += `
    <div class="simplegoals-overview-goal ${goals[key].unlocked ? "" : "simplegoals-overview-goal--locked"}">
      <div class="simplegoals-overview-goal__icon">
        <img src="https://static.simplegoals.co/cup.svg" />
      </div>
      <div class="simplegoals-overview-goal__body">
        <h3 class="simplegoals-overview-goal__name">${goals[key].name}</h3>
        <p class="simplegoals-overview-goal__description">
          ${goals[key].description}
        </p>
      </div>
    </div>
    `
  }
  return result
}

const rerenderOverviewGoals = (goals) => {
  document.getElementById('simplegoals-overview__goals').innerHTML = overviewGoalsHtml(goals)
}

const showOverview = () => {
  if(!overview) { return }
  overview.scrollTo(0, 0)
  overview.classList.add('simplegoals-overview--opened')
}

const hideOverview = () => {
  overview.classList.remove('simplegoals-overview--opened')
}

/***/ }),

/***/ "./src/modules/support.js":
/*!********************************!*\
  !*** ./src/modules/support.js ***!
  \********************************/
/*! exports provided: postRequest, hashCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postRequest", function() { return postRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashCode", function() { return hashCode; });
const apiUrl = "https://api.simplegoals.co"

const postRequest = async (endpoint, data) => {
  const response = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(response.ok) {
    return await response.json()
  } else {
    return false
  }
}

const hashCode = (source) => {
  let hash = 0;
  if (source.length == 0) { return hash; }
  for (let i = 0; i < source.length; i++) {
    let char = source.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}

/***/ })

/******/ });
});
//# sourceMappingURL=simplegoals.js.map