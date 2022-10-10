import { formattedData } from 'utils'

import { IResponseListItem } from 'types'

import { TYPES } from '../types'

export const actions = {
  setWeather: (data: IResponseListItem | any) =>
    ({
      type: TYPES.SET_WEATHER,
      weather: data,
      days: formattedData(data.list),
    } as const),
  setPending: (load: boolean) =>
    ({
      type: TYPES.SET_PENDING,
      isPending: load,
    } as const),
  changeDay: (day: number) =>
    ({
      type: TYPES.CHANGE_DAY,
      payload: day,
    } as const),
  setError: (error: boolean) =>
    ({
      type: TYPES.SET_ERROR,
      error,
    } as const),
  getLocation: (coords: any) =>
    ({
      type: TYPES.GET_LOCATION,
      location: coords,
    } as const),
  setService: (name: string) =>
    ({
      type: TYPES.SET_API,
      service: name,
    } as const),
  setHourlyWeather: (data: any) =>
    ({
      type: TYPES.SET_WEATHER_HOURLY,
      weatherHourly: data,
    } as const),
}
