import { Service } from 'enums'

import { TYPES } from '../actions/types'

const initialState = {
  service: Service.OpenWeather,
}
export type initialStateType = typeof initialState

export const serviceReducer = (
  state = initialState,
  action: { service: Service, type: string },
): initialStateType => {
  const { service, type } = action

  switch (type) {
    case TYPES.SET_API:
      return {
        ...state,
        service
      }
    default: {
      return state
    }
  }
}
