import api from 'api'
import get from 'lodash.get'
import history from 'common/history'

export const getWeather = city => async dispatch => {
  try {
    const res = await api.getForecast(city)
    const success = res.statusText === 'OK'

    if (res.statusText === 'OK') {
      dispatch({
        type: 'GET_WEATHER',
        payload: res.data,
      })

      if (success) history.push(`/${city}`)
    }
  } catch (error) {
    dispatch({
      type: 'ERROR',
      error: get(error, 'response.data'),
    })

    if (error) history.push('/')
  }
}
