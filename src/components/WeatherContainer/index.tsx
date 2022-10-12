import {
  FC,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { getWeather, getGeolocation } from 'store/actions'
import { ResultDaysType } from 'utils'
import { AppDispatch, useAppDispatch } from 'types'
import { useTypedSelector } from 'hooks'
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
  const { isPending, days, error, currentDayWeather } =
    useTypedSelector((state) => state.weather)
  const weatherCity = useTypedSelector(
    (state) => state.weather.weather?.city,
  )
  const userCity = useTypedSelector(
    (state: any) => state.location?.location?.city?.name_en,
  )
  const { service } = useTypedSelector(
    (state) => state.service,
  )

  useLayoutEffect(() => {
    dispatch(getGeolocation())
  }, [])

  useEffect(() => {
    dispatch(getWeather(userCity))
  }, [userCity])

  useEffect(() => {
    setSelected(0)
  }, [weatherCity])

  if (isPending || !weatherCity) return <Loading />
  if (!days || error) return <ErrorLoader />

  return (
    <WeatherWrapper>
      <WeatherMain
        params={weatherCity}
        currentWeather={currentDayWeather}
      />
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
      {service === SERVICES[1] && <ChartWeather />}
    </WeatherWrapper>
  )
}
