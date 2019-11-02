require ('./index.css')

import { prepareGoals } from './modules/local-goals'
import { loadFromCloud } from './modules/cloud-storage'
import { initOverview, showOverview } from './modules/overview'
import { unlockGoal } from './modules/achievements'
import { initButtons } from './modules/buttons'

let options = {
  timeout: 0,
  onGoalUnlock: (goalKey) => {},
  freshStart: false,
  useCloudStorage: false,
  appId: null,
  user: {}
}
let goals = null

export const init = async config => {
  Object.assign(options, config)
  goals = prepareGoals(options)
  await loadFromCloud(goals, options)
  initOverview(goals)
  initButtons(goals, options)
}

export const unlock = async (name) => {
  unlockGoal(name, goals, options)
}

export { showOverview } from './modules/overview'

export default {init, unlock, showOverview}
