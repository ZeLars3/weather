import { Service } from 'enums'

import { TYPES } from '../types'

const initialState = {
  service: Service.OpenWeather,
}
export type initialStateType = typeof initialState

export const serviceReducer = (
  state = initialState,
  action: any,
): initialStateType => {
  switch (action.type) {
    case TYPES.SET_API:
      return {
        ...state,
        service: action.service,
      }
    default: {
      return state
    }
  }
}
