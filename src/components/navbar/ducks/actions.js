import api from 'api'
import history from 'common/history'

export const getWeather = city => async dispatch => {
  const res = await api.getForecast(city)
  dispatch({
    type: 'GET_WEATHER',
    payload: res.data,
  })
  history.push(`/weather`)
}
