const SimpleGoals = (() => {
  const States = {
    CLOSED: 0,
    ACHIEVEMENT_OPENED: 1
  }
  let state = States.CLOSED
  let options = {
    timeout: 0
  }
  let currentGoal = null
  let goals = null
  let achievement = null
  let achievementTimeout = null
  let overview = null

  const setOptions = config => {
    if (config.timeout) {
      options.timeout = config.timeout
    }
  }

  const createAchievementNotificationHtml = () => {
    const achievementNotificationHtmlString = `
    <div class="simplegoals-achievement" id="simplegoals-achievement">
      <div class="simplegoals-achievement__icon">
        <img src="cup.svg" />
      </div>
      <div class="simplegoals-achievement__body">
        <p class="simplegoals-achievement__notification">
          New achievement unlocked
        </p>
        <p class="simplegoals-achievement__name" id="simplegoals-achievement__name"></p>
      </div>
      <button class="simplegoals-achievement__button" id="simplegoals-achievement__button"></button>
      <button class="simplegoals-achievement__close-button" id="simplegoals-achievement__close-button">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M50 50L450 450" stroke-width="100" stroke-linecap="round"/>
            <path d="M50 450L450 50" stroke-width="100" stroke-linecap="round"/>
          </g>
        </svg>
      </button>
    </div>
    `
    const node = new DOMParser().parseFromString(achievementNotificationHtmlString , 'text/html').body.firstChild
    document.body.appendChild(node)
  }

  const createDOMElements = () => {
    createAchievementNotificationHtml()
  }

  const setGoal = (newGoal) => {
    currentGoal = newGoal
    achievementName = document.getElementById('simplegoals-achievement__name')
    achievementButton = document.getElementById('simplegoals-achievement__button')
    achievementName.innerHTML = currentGoal.name
    achievementButton.innerHTML = 'Learn more'
  }

  const showAchievement = () => {
    achievement.classList.remove('simplegoals-achievement--closed')
    achievement.classList.add('simplegoals-achievement--opened')
    if (options.timeout) {
      clearTimeout(achievementTimeout)
      achievementTimeout = setTimeout(hide, options.timeout)
    }
  }

  const hideAchievement = () => {
    achievement.classList.remove('simplegoals-achievement--opened')
    achievement.classList.add('simplegoals-achievement--closed')
    clearTimeout(achievementTimeout)
  }

  const showOverview = () => {
    overview.scrollTo(0, 0)
    overview.classList.add('simplegoals-overview--opened')
  }

  const hideOverview = () => {
    overview.classList.remove('simplegoals-overview--opened')
  }

  const initAchievement = () => {
    achievement = document.getElementById('simplegoals-achievement')
    achievement.addEventListener('click', event => achievement.classList.toggle('simplegoals-achievement--clicked'))
    const trigger = document.getElementById('simplegoals-achievement__close-button')
    trigger.addEventListener('click', event => hideAchievement())
    const overviewTrigger = document.getElementById('simplegoals-achievement__button')
    overviewTrigger.addEventListener('click', event => {
      hideAchievement()
      setTimeout(showOverview, 200)
    })
  }

  const initOverview = () => {
    overview = document.getElementById('simplegoals-overview')
    const trigger = document.getElementById('simplegoals-overview__close-button')
    trigger.addEventListener('click', event => hideOverview())
  }

  const init = config => {
    setOptions(config)
    goals = config.goals
    createDOMElements()
    initAchievement()
    initOverview()
  }

  const unlock = (name) => {
    setGoal(goals[name])
    showAchievement()
  }

  return {init, unlock, showOverview}
})()

const goals = {
  first: {
    name: 'Curious Explorer',
    descripton: 'Curious explorer curious explorer curious explorer curious explorer'
  },
  second: {
    name: 'CUrious EXplorer',
    descripton: 'CUrious explorer curious explorer curious explorer curious explorer'
  }
}

SimpleGoals.init({
  goals: goals
})