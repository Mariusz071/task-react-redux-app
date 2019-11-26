import { combineReducers } from 'redux'
import { reducer as weather } from 'components/searchbar'

export default combineReducers({
  weather,
})
