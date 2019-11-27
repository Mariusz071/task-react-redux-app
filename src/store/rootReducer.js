import { combineReducers } from 'redux'
import { reducer as weather } from 'pages/forecast'

export default combineReducers({
  weather,
})
