import { showOverview } from './overview'
import { unlockGoal } from './achievements'

export const initButtons = (goals, options) => {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.simplegoalsUnlock) {
      event.preventDefault()
      unlockGoal(event.target.dataset.simplegoalsUnlock, goals, options)
    }
    if (event.target.dataset.simplegoalsOverview) {
      event.preventDefault()
      showOverview();
    }
  }, false);
}