require ('./index.css')

const apiUrl = "https://api.simplegoals.co"

let options = {
  timeout: 0,
  onGoalUnlock: (goalKey) => {},
  useCloudStorage: false,
  appId: null,
  user: {}
}
let goals = null
let overview = null

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

const saveLocalGoal = (name) => {
  if (typeof(Storage) !== "undefined") {
    let localGoals = getLocalGoals()
    localGoals.push(name)
    localStorage.setItem('simplegoals-storage', JSON.stringify(localGoals))
  }
}

const getLocalGoals = () => {
  if (typeof(Storage) !== "undefined") {
    return JSON.parse(localStorage.getItem('simplegoals-storage')) || []
  } else {
    return []
  }
}

const saveCloudGoal = async (name) => {
  if (options.useCloudStorage) {
    let data = {
      name: name
    }
    addAuthData(data)
    await postRequest("/goals/unlock", data)
  } else {
    return false
  }
}

const setOptions = config => {
  Object.assign(options, config)
}

const addAuthData = (hash) => {
  hash.appId = options.appId
  hash.user = options.user
}

const loadFromCloud = async () => {
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
    addAuthData(data)
    const response = await postRequest("/sessions", data)
    if (response) {
      updateGoalsFromCloud(response)
    }
  } else {
    return false
  }
}

const prepareGoals = config => {
  goals = config.goals
  const localGoals = getLocalGoals()
  for (const key of Object.keys(goals)) {
    goals[key].unlocked = localGoals.includes(key)
  }
}

const updateGoalsFromCloud = (response) => {
  for (const key of Object.keys(goals)) {
    goals[key].unlocked = response.unlockedGoals.includes(key)
  }
}

const recalculateAchievementsTop = () => {
  const nodes = document.getElementsByClassName('simplegoals-achievement')
  for(let i=0; i < nodes.length; i++) {
    nodes[i].style.top = `${1 + i*7}em`
  }
}

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
  const box = document.getElementById("simplegoals-overview-box")
  document.body.appendChild(node)
  return node
}

const overviewGoalsHtml = () => {
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

const createOverviewHtml = () => {
  const overviewHtmlString = `
  <div class="simplegoals-overview" id="simplegoals-overview">
    <div class="simplegoals-overview__wrapper">
      <div class="simplegoals-overview__body">
        <h1 class="simplegoals-overview__title">Achievements</h1>
        <p class="simplegoals-overview__subtitle">Complete tasks and unlock achievements</p>
        <div class="simplegoals-overview__goals" id="simplegoals-overview__goals">
        ` + overviewGoalsHtml() + `
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

const rerenderOverviewGoals = () => {
  document.getElementById('simplegoals-overview__goals').innerHTML = overviewGoalsHtml()
}

const createDOMElements = () => {
  createOverviewHtml()
}

const showAchievement = (name, goal) => {
  const key = hashCode(name)
  const achievement = createAchievementHtml(key, goal, 'Learn more')
  recalculateAchievementsTop()
  achievement.classList.add('simplegoals-achievement--opened')
  initAchievement(key, achievement)
  if (options.timeout) {
    achievementTimeout = setTimeout(() => hideAchievement(achievement), options.timeout)
  }
}

const hideAchievement = (achievement) => {
  achievement.classList.remove('simplegoals-achievement--opened')
  achievement.classList.add('simplegoals-achievement--closed')
  setTimeout(() => {
    achievement.parentNode.removeChild(achievement)
    recalculateAchievementsTop()
  }, 2000)
}

const hideOverview = () => {
  overview.classList.remove('simplegoals-overview--opened')
}

const initAchievement = (key, achievement) => {
  achievement.addEventListener('click', event => achievement.classList.toggle('simplegoals-achievement--clicked'))
  const trigger = document.getElementById(`simplegoals-achievement__close-button-${key}`)
  trigger.addEventListener('click', event => hideAchievement(achievement))
  const overviewTrigger = document.getElementById(`simplegoals-achievement__button-${key}`)
  overviewTrigger.addEventListener('click', event => {
    hideAchievement(achievement)
    setTimeout(showOverview, 200)
  })
}

const initOverview = () => {
  overview = document.getElementById('simplegoals-overview')
  const trigger = document.getElementById('simplegoals-overview__close-button')
  trigger.addEventListener('click', event => hideOverview())
}

const initButtons = () => {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.simplegoalsUnlock) {
      event.preventDefault()
      unlock(event.target.dataset.simplegoalsUnlock)
    }
    if (event.target.dataset.simplegoalsOverview) {
      event.preventDefault()
      showOverview();
    }
  }, false);
}

export const init = async config => {
  setOptions(config)
  prepareGoals(config)
  await loadFromCloud()
  createDOMElements()
  initOverview()
  initButtons()
}

export const unlock = async (name) => {
  if(!goals[name]) { return }
  if(goals[name].unlocked){
    return
  }
  goals[name].unlocked = true
  options.onGoalUnlock(name)
  saveLocalGoal(name)
  await saveCloudGoal(name)
  showAchievement(name, goals[name])
  rerenderOverviewGoals()
}

export const showOverview = () => {
  overview.scrollTo(0, 0)
  overview.classList.add('simplegoals-overview--opened')
}
