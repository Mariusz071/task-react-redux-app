import { Dispatch } from 'redux'
import { ReduxActionTypes } from 'common/types'
import api from 'api'
import { history } from 'common/history'
import keyBy from 'lodash.keyby'
import get from 'lodash.get'
import { GetDailyWeatherAction } from './types'

export const getDailyWeather = (city: string, id: string) => async (dispatch: Dispatch) => {
  //EXPLANATION
  // Fetching whole weather only because this endpoint comes free from this API. Other endpoints require paid subscription

  const res = await api.getForecast(city)
  const data = res.data
  const forecastList = keyBy(get(data, 'list'), 'dt')
  const weather = get(forecastList, id)

  dispatch<GetDailyWeatherAction>({
    type: ReduxActionTypes.getDailyWeather,
    payload: { weather, city },
  })
  return history.push(`/${city}/${id}`)
}
