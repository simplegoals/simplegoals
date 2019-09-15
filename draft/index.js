const SimpleGoals = (() => {
  class Goals {
  }

  let achievement = null
  let achievementTimeout = null

  const init = config => {
    achievement = document.getElementById('simplegoals-achievement')
    achievement.addEventListener('click', event => achievement.classList.toggle('simplegoals-achievement--clicked'))
    const trigger = document.getElementById('simplegoals-achievement__close-button')
    trigger.addEventListener('click', event => hide())
  }

  const show = config => {
    achievement.classList.remove('simplegoals-achievement--closed')
    achievement.classList.add('simplegoals-achievement--opened')
    clearTimeout(achievementTimeout)
    // achievementTimeout = setTimeout(hide, 5000)
  }

  const hide = config => {
    achievement.classList.remove('simplegoals-achievement--opened')
    achievement.classList.add('simplegoals-achievement--closed')
    clearTimeout(achievementTimeout)
  }

  return {init, show, hide}
})()

SimpleGoals.init()