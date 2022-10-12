import { ResultDaysType } from 'utils'
import { ResponseType } from 'types'

import { TYPES } from '../actions/types'

const initialState = {
  weather: null as null | ResponseType,
  weatherOnHours: null as null | { temp: number[], date: string[] },
  isPending: true,
  error: false,
  days: null as null | ResultDaysType[],
  currentDayWeather: null as null | ResultDaysType,
  weatherHourly: null as null | any,
}
export type initialStateType = typeof initialState;

export const weatherReducer = (
  state = initialState,
  action: any,
): initialStateType => {
  const {
    weather, days, isPending, error, type,
} = action

  switch (type) {
    case TYPES.SET_WEATHER:
      return {
        ...state,
        weather,
        days
      }
    case TYPES.SET_WEATHER_HOURLY:
      return {
        ...state,
        weatherHourly: weather,
      }
    case TYPES.SET_PENDING:
      return {
        ...state,
        isPending
      }
    case TYPES.SET_ERROR:
      return {
        ...state,
        error
      }
    case TYPES.CHANGE_DAY:
      return {
        ...state,
        currentDayWeather: state?.days![action.payload] ?? false,
        weatherOnHours: {
          temp: state?.days![action.payload].weather.map((temp) => Math.round(+temp.main.temp)) ?? false,
          date: state?.days![action.payload].weather.map((temp) => temp.dt_txt) ?? false,
        },
      }
    default: {
      return state
    }
  }
}
