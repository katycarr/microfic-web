export const updateEditor = (newState) => {
  return {
    type: 'UPDATE',
    payload: newState
  }
}

export const clearEditor = () => {
  return {
    type: 'CLEAR'
  }
}
