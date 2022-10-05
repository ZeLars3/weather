import { ResultDaysType } from 'utils'
import { ResponseType } from 'types'

import { TYPES } from '../types'

const initialState = {
  weather: null as null | ResponseType,
  weatherOnHours: null as null | { temp: number[], date: string[] },
  isPending: true,
  error: false,
  days: null as null | ResultDaysType[],
  currentDayWeather: null as null | ResultDaysType,
}
export type initialStateType = typeof initialState;

export const weatherReducer = (
  state = initialState,
  action: any,
): initialStateType => {
  switch (action.type) {
    case TYPES.SET_WEATHER:
      return {
        ...state,
        weather: action.weather,
        days: action.days,
      }
    case TYPES.SET_PENDING:
      return {
        ...state,
        isPending: action.isPending,
      }
    case TYPES.SET_ERROR:
      return {
        ...state,
        error: action.error,
      }
    case TYPES.CHANGE_DAY:
      return {
        ...state,
        currentDayWeather: state?.days![action.payload] ?? false,
        weatherOnHours: {
          temp: state?.days![action.payload].weather.map(temp => Math.round(+temp.main.temp)) ?? false,
          date: state?.days![action.payload].weather.map(temp => temp.dt_txt) ?? false,
        },
      }
    default: {
      return state
    }
  }
}
