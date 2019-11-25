import api from 'api'

export const getWeather = city => async dispatch => {
  const res = await api.getForecast(city)
  dispatch({
    type: 'GET_WEATHER',
    payload: res,
  })
}
