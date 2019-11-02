import { hashCode } from './support'
import { saveLocalGoal } from './local-goals'
import { saveCloudGoal } from './cloud-storage'
import { rerenderOverviewGoals, showOverview } from './overview'

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
  const key = hashCode(name)
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
    setTimeout(showOverview, 200)
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

export const unlockGoal = async (name, goals, options) => {
  if(!goals || !goals[name]) { return }
  if(goals[name].unlocked){
    return
  }
  goals[name].unlocked = true
  options.onGoalUnlock(name)
  saveLocalGoal(name, options)
  await saveCloudGoal(name, options)
  showAchievement(name, goals[name], options)
  rerenderOverviewGoals(goals)
}