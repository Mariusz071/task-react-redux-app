export default (initialState = { error: null, data: null }, action) => {
  const { type, payload, error } = action
  switch (type) {
    case 'GET_WEATHER':
      return {
        data: { ...payload },
        error: null,
      }

    case 'ERROR':
      return {
        error,
      }

    default:
      return initialState
  }
}
