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
      <div class="simplegoals-achievement__button" id="simplegoals-achievement__button"></div>
      <div class="simplegoals-achievement__close-button" id="simplegoals-achievement__close-button">
        <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M50 50L450 450" stroke-width="100" stroke-linecap="round"/>
            <path d="M50 450L450 50" stroke-width="100" stroke-linecap="round"/>
          </g>
        </svg>
      </div>
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

  const init = config => {
    setOptions(config)
    createDOMElements()
    goals = config.goals
    achievement = document.getElementById('simplegoals-achievement')
    achievement.addEventListener('click', event => achievement.classList.toggle('simplegoals-achievement--clicked'))
    const trigger = document.getElementById('simplegoals-achievement__close-button')
    trigger.addEventListener('click', event => hide())
  }

  const show = config => {
    achievement.classList.remove('simplegoals-achievement--closed')
    achievement.classList.add('simplegoals-achievement--opened')
    if (options.timeout) {
      clearTimeout(achievementTimeout)
      achievementTimeout = setTimeout(hide, 5000)
    }
  }

  const unlock = (name) => {
    setGoal(goals[name])
    show()
  }

  const hide = config => {
    achievement.classList.remove('simplegoals-achievement--opened')
    achievement.classList.add('simplegoals-achievement--closed')
    clearTimeout(achievementTimeout)
  }

  return {init, unlock, hide}
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