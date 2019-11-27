import api from 'api'
import history from 'common/history'
import get from 'lodash.get'

export const getWeather = city => async dispatch => {
  try {
    const res = await api.getForecast(city)

    if (res.statusText === 'OK') {
      dispatch({
        type: 'GET_WEATHER',
        payload: res.data,
      })
      return history.push(`/weather`)
    }
  } catch (error) {
    dispatch({
      type: 'ERROR',
      error: get(error, 'response.data'),
    })
  }
}
