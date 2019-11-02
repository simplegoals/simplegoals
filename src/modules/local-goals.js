export const saveLocalGoal = (name, options) => {
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

export const prepareGoals = (options) => {
  let goals = options.goals
  const localGoals = getLocalGoals(options)
  for (const key of Object.keys(goals)) {
    goals[key].unlocked = localGoals.includes(key)
  }
  return goals
}