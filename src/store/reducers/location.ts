import { ICity } from 'types'

import { TYPES } from '../actions/types'

const initialState = {
  location: null as null | ICity,
}
export type initialStateType = typeof initialState

export const locationReducer = (
  state = initialState,
  action: { location: any, type: string },
): initialStateType => {
  const { location, type } = action

  switch (type) {
    case TYPES.GET_LOCATION:
      return {
        ...state,
        location
      }
    default: {
      return state
    }
  }
}
