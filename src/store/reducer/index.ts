import { combineReducers } from 'redux'

import { locationReducer } from './location'
import { weatherReducer } from './weather'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer
})
