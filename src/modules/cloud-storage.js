import { postRequest } from './support'

export const saveCloudGoal = async (name, options) => {
  if (options.useCloudStorage) {
    let data = {
      name: name
    }
    addAuthData(data, options)
    await postRequest("/goals/unlock", data)
  } else {
    return false
  }
}

const addAuthData = (hash, options) => {
  hash.appId = options.appId
  hash.user = options.user
}

export const loadFromCloud = async (goals, options) => {
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
    const response = await postRequest("/sessions", data)
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