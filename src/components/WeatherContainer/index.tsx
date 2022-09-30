import { useEffect, useState } from 'react'

import { getWeather, getGeolocation } from 'store/thunk'
import { ResultDaysType } from 'utils'

import {
  AppDispatch,
  useAppDispatch,
  useAppSelector
} from '../../types'
import {
  ErrorLoader,
  Loading,
  WeatherItem,
  WeatherMain
} from '../common'
import { WeatherListCard, WeatherWrapper } from './styled'

export const WeatherContainer = () => {
  const [selected, setSelected] = useState<number>(0)
  const dispatch: AppDispatch = useAppDispatch()
  const isPending = useAppSelector((state: any) => state.weather?.isPending)
  const days = useAppSelector((state: any) => state.weather?.days)
  const weatherCity = useAppSelector(
    (state: any) => state?.weather?.weather?.city
  )
  const currentWeather = useAppSelector(
    (state: any) => state.weather?.currentDayWeather
  )
  const error = useAppSelector((state: any) => state.weather?.error)

  useEffect(() => {
    dispatch(getWeather('Minsk'))
    dispatch(getGeolocation())
  }, [])

  useEffect(() => {
    setSelected(0)
  }, [weatherCity])

  if (isPending || !weatherCity) return <Loading />
  if (!days || error) return <ErrorLoader />

  return (
    <WeatherWrapper>
      <WeatherMain params={weatherCity} currentWeather={currentWeather}></WeatherMain>
      <WeatherListCard>
        {days!.map((item: ResultDaysType, index: number) => (
          <WeatherItem
            key={index}
            day={index}
            weatherData={item}
            active={selected === index}
            onChangeSelected={setSelected}
          />
        ))}
      </WeatherListCard>
    </WeatherWrapper>
  )
}
