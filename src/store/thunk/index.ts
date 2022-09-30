import { weatherApi } from 'api'

import { ActionsTypes, ThunkType } from '../../types'
import { actions } from '../actionCreator'

export const getWeather =
  (city: string): ThunkType<ActionsTypes<typeof actions>> =>
    async dispatch => {
      try {
        dispatch(actions.setPending(true))
        dispatch(actions.setError(false))

        const weather = await weatherApi.getWeather(city)

        dispatch(actions.setWeather(weather))
        dispatch(actions.changeDay(0))
      } catch (error: unknown) {
        dispatch(actions.setError(true))
      } finally {
        dispatch(actions.setPending(false))
      }
    }

export const getGeolocation =
   (): ThunkType<ActionsTypes<typeof actions>> =>
     async dispatch => {
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
