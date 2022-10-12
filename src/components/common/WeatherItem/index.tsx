import { FC } from 'react'

import { actions } from 'store/actions'
import {
  AppDispatch,
  IWeatherItem,
  useAppDispatch,
} from 'types'
import { weatherAverage, convertedLocalDate } from 'utils'

import { Image } from '../Image'
import {
  Celsius,
  Day,
  Description,
  IconWrapper,
  ItemWrapper,
  Temp,
} from './styled'

export const WeatherItem: FC<IWeatherItem> = ({
  onChangeSelected,
  active,
  day,
  weatherData,
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const data: string = convertedLocalDate(
    weatherData.weather[0].dt_txt,
  )
  const { icon } = weatherData.weather[0].weather[0]
  const description: string =
    weatherData.weather[0].weather[0].main
  const temp: string = weatherAverage(
    weatherData.weather,
  ).toFixed(0)

  const handlerDays = (day: number) => (): void => {
    onChangeSelected(day)
    dispatch(actions.changeDay(day))
  }

  return (
    <ItemWrapper
      className={
        active ? 'weather-card active' : 'weather-card'
      }
      onClick={handlerDays(day)}>
      <Day>{data}</Day>
      <IconWrapper>
        <Image
          image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          title={description}
        />
      </IconWrapper>
      <Temp>
        {temp} <Celsius>°C</Celsius>
      </Temp>
      <Description>{description}</Description>
    </ItemWrapper>
  )
}
