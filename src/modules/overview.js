let overview = null

export const initOverview = (goals) => {
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

export const rerenderOverviewGoals = (goals) => {
  document.getElementById('simplegoals-overview__goals').innerHTML = overviewGoalsHtml(goals)
}

export const showOverview = () => {
  if(!overview) { return }
  overview.scrollTo(0, 0)
  overview.classList.add('simplegoals-overview--opened')
}

const hideOverview = () => {
  overview.classList.remove('simplegoals-overview--opened')
}