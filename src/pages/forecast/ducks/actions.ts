import api from 'api'
import get from 'lodash.get'
import history from 'common/history'
import { Dispatch } from 'redux'
import { ReduxActionTypes } from 'common/types'
import { GetWeatherAction, ErrorAction } from '../types'

export const getWeather = (city: string) => async (dispatch: Dispatch) => {
  try {
    const res = await api.getForecast(city)
    const success = res.statusText === 'OK'

    if (success) {
      dispatch<GetWeatherAction>({
        type: ReduxActionTypes.getWeather,
        payload: res.data,
      })

      if (success) history.push(`/${city}`)
    }
  } catch (error) {
    dispatch<ErrorAction>({
      type: ReduxActionTypes.error,
      error: get(error, 'response.data'),
    })

    if (error) history.push('/')
    history.push('/')
  }
}
