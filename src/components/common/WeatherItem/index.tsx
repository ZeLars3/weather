import { FC } from 'react'

import { actions } from 'store/actionCreator'
import { AppDispatch, useAppDispatch } from 'types'
import {
  weatherAverage,
  ResultDaysType,
  convertedLocalDate,
} from 'utils'

import { Image } from '../Image'
import {
  Day,
  Description,
  IconWrapper,
  ItemWrapper,
  Temp,
} from './styled'

interface IPropsType {
  onChangeSelected: (value: number) => void
  active: boolean
  day: number
  weatherData: ResultDaysType
}

export const WeatherItem: FC<IPropsType> = ({
  onChangeSelected,
  active,
  day,
  weatherData,
}) => {
  const data: string = convertedLocalDate(
    weatherData.weather[0].dt_txt,
  )
  const icon: string =
    weatherData.weather[0].weather[0].icon
  const description: string =
    weatherData.weather[0].weather[0].main
  const temp: string = weatherAverage(
    weatherData.weather,
  ).toFixed(0)
  const dispatch: AppDispatch = useAppDispatch()

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
          title={description}></Image>
      </IconWrapper>
      <Temp>
        {temp} <span>°C</span>
      </Temp>
      <Description>{description}</Description>
    </ItemWrapper>
  )
}
