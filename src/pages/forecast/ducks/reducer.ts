import { WeatherAction, } from '../types'
import { ReduxActionTypes } from 'common/types'

const state = {
  weather: null,
  dailyWeather: null,
  error: null
}

export default (initialState = state, action: WeatherAction) => {
  switch (action.type) {
    case ReduxActionTypes.getWeather:
      return {
        data: action.payload,
        error: null,
      }

    case ReduxActionTypes.error:
      return {
        error: action.error
      }

    default:
      return initialState
  }
}
