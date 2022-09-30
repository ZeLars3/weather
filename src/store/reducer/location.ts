import { TYPES } from '../types'

const initialState = {
  location: null as null
}
export type initialStateType = typeof initialState

export const locationReducer = (
  state = initialState,
  action: any
): initialStateType => {
  switch (action.type) {
    case TYPES.GET_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default: {
      return state
    }
  }
}
