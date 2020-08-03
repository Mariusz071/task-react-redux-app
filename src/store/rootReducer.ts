import { combineReducers } from 'redux'
import { reducer as weather } from 'pages/forecast'
import { reducer as dailyWeather } from 'pages/detailedForecast'

export default combineReducers({
  weather,
  dailyWeather
})
