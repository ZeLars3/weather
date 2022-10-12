import { formattedData } from 'utils'
import { weatherApi } from 'api'
import { ActionsTypes, IResponseListItem, ThunkType } from 'types'

import { TYPES } from './types'

export const actions = {
  setWeather: (data: IResponseListItem | any) => ({
    type: TYPES.SET_WEATHER,
    weather: data,
    days: formattedData(data.list),
    } as const),
  setPending: (load: boolean) => ({
    type: TYPES.SET_PENDING,
    isPending: load,
    } as const),
  changeDay: (day: number) => ({
    type: TYPES.CHANGE_DAY,
    payload: day,
    } as const),
  setError: (error: boolean) => ({
    type: TYPES.SET_ERROR,
    error
    } as const),
  getLocation: (coords: any) => ({
    type: TYPES.GET_LOCATION,
    location: coords,
    } as const),
  setService: (name: string) => ({
    type: TYPES.SET_API,
    service: name,
    } as const),
  setHourlyWeather: (data: any) => ({
    type: TYPES.SET_WEATHER_HOURLY,
    weatherHourly: data,
    } as const),
}

export const getWeather = (city: string): ThunkType<ActionsTypes<typeof actions>> => async (dispatch) => {
  try {
    dispatch(actions.setPending(true))
    dispatch(actions.setError(false))

    const weather = await weatherApi.getWeather(city)

    dispatch(actions.setWeather(weather))
    dispatch(actions.changeDay(0))
  } catch (error: unknown) {
    dispatch(actions.setError(false))
  } finally {
    dispatch(actions.setPending(false))
  }
}

export const getWeatherFromStormglass = (city: string): ThunkType<ActionsTypes<typeof actions>> => async (dispatch) => {
  try {
    dispatch(actions.setPending(true))
    dispatch(actions.setError(false))

    const weatherHourly = await weatherApi.getWeatherHourly(city)

    dispatch(actions.setHourlyWeather(weatherHourly))
  } catch (error: unknown) {
    dispatch(actions.setError(true))
  } finally {
    dispatch(actions.setPending(false))
  }
}

export const getGeolocation = (): ThunkType<ActionsTypes<typeof actions>> => async (dispatch) => {
  try {
    dispatch(actions.setPending(true))
    dispatch(actions.setError(false))

    const userCity = await weatherApi.getCityFromIP()

    dispatch(actions.getLocation(userCity))
  } catch (error: unknown) {
    dispatch(actions.setError(true))
  } finally {
    dispatch(actions.setPending(false))
  }
}
