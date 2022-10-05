import { SERVICES } from 'constants/index'

import { TYPES } from '../types'

const initialState = {
  service: SERVICES[0],
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
        service: action.location,
      }
    default: {
      return state
    }
  }
}
