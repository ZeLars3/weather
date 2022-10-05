import { combineReducers } from 'redux'

import { locationReducer } from './location'
import { serviceReducer } from './service'
import { weatherReducer } from './weather'

export const rootReducer = combineReducers({
  weather: weatherReducer,
  location: locationReducer,
  service: serviceReducer,
})
