const apiUrl = "https://api.simplegoals.co"

export const postRequest = async (endpoint, data) => {
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

export const hashCode = (source) => {
  let hash = 0;
  if (source.length == 0) { return hash; }
  for (let i = 0; i < source.length; i++) {
    let char = source.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}