import { FC, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import {
  getWeather,
  getGeolocation,
} from 'store/thunk'
import { ResultDaysType } from 'utils'
import {
  AppDispatch,
  useAppDispatch,
  useAppSelector,
} from 'types'
import { SERVICES } from 'constants/services'

import {
  ErrorLoader,
  Loading,
  WeatherItem,
  WeatherMain,
} from '../common'
import { ChartWeather } from '../ChartWeather'
import { WeatherListCard, WeatherWrapper } from './styled'

export const WeatherContainer: FC = () => {
  const [selected, setSelected] = useState <number>(0)
  const dispatch: AppDispatch = useAppDispatch()
  const isPending = useAppSelector(
    (state: any) => state.weather?.isPending,
  )
  const days = useAppSelector(
    (state: any) => state.weather?.days,
  )
  const weatherCity = useAppSelector(
    (state: any) => state.weather?.weather?.city,
  )
  const currentWeather = useAppSelector(
    (state: any) => state.weather?.currentDayWeather,
  )
  const error = useAppSelector(
    (state: any) => state.weather?.error,
  )
  const userCity = useAppSelector(
    (state: any) => state.location?.location?.city?.name_en,
  )
  const currentService = useAppSelector(
    (state: any) => state.service?.service,
  )

  useEffect(() => {
    dispatch(getGeolocation())
    dispatch(getWeather(userCity))
  }, [])

  useEffect(() => {
    setSelected(0)
  }, [weatherCity])

  if (isPending || !weatherCity) return <Loading />
  if (!days || error) return <ErrorLoader />

  return (
    <WeatherWrapper>
      <WeatherMain
        params={weatherCity}
        currentWeather={currentWeather}></WeatherMain>
      <WeatherListCard>
        {days.map((item: ResultDaysType, index: number) => (
          <WeatherItem
            key={uuidv4()}
            day={index}
            weatherData={item}
            active={selected === index}
            onChangeSelected={setSelected}
          />
        ))}
      </WeatherListCard>
      {currentService === SERVICES[1] && <ChartWeather />}
    </WeatherWrapper>
  )
}
