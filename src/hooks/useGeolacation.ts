import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { weatherApi } from '../api'
import { getGeolocation } from '../store/thunk'

export const useGeolocation = () => {
  const [loadingApp, setLoadingApp] = useState <boolean>(true)

  const getLocation = (): void => {
    const latlong = {
      latitude: 55.52641,
      longitude: 28.678333,
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const latlong = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }

           axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?appid=a2b9f77809cc3ef03c38e28f3be2b688&lat=${latlong.latitude}&lon=${latlong.longitude}`,
            )
            .then((res) => res.data)
          // weatherApi.getCurrentWeatherLocation(position.coords.latitude, position.coords.longitude)

          setLoadingApp(false)
        },
        () => {
          setLoadingApp(false)
        },
      )
    } else {
      setLoadingApp(false)
    }
  }
  return { loadingApp, getLocation }
}
