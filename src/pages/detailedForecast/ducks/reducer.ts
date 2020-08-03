import { ReduxActionTypes } from "common/types"
import { GetDailyWeatherAction } from "./types"

const state = {
  weather: null,
  dailyWeather: null,
  error: null
}

export default (initialState = state, action: GetDailyWeatherAction) => {
  switch (action.type) {
    case ReduxActionTypes.getDailyWeather:
      return {
        data: action.payload,
      }
    default:
      return initialState
  }
}
