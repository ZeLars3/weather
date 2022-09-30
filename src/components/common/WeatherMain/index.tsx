import { FC } from 'react'

import {
  convertedLocalDate,
  ResultDaysType,
  weatherAverage,
  getCardBackground
} from 'utils'
import { IResponseCity } from 'types'

import {
  MainWrapper,
  WeatherCity,
  WeatherData,
  WeatherIcon,
  WeatherInfo,
  WeatherList,
  WeatherOtherInfo,
  WeatherTemp
} from './styled'
import { Image } from '../Image'

interface IPropsType {
  params: IResponseCity
  currentWeather: ResultDaysType
}

export const WeatherMain: FC<IPropsType> = ({
  params,
  currentWeather
}) => {
  const date: string = convertedLocalDate(
    currentWeather.weather[0].dt_txt
  )
  const population: string =
    params.population.toLocaleString()
  const description: string =
    currentWeather.weather[0].weather[0].main
  const icon: string =
  currentWeather.weather[0].weather[0].icon
  const pop: string = (
    currentWeather.weather[0].pop * 100
  ).toFixed(0)
  const humidity: string =
    currentWeather.weather[0].main.humidity.toFixed(0)
  const windSpeed: string =
    currentWeather.weather[0].wind.speed.toFixed(1)
  const temp: string = weatherAverage(
    currentWeather.weather
  ).toFixed(0)

  return (
    <MainWrapper
      background={description}
      image={getCardBackground(description)}
    >
      <WeatherData>
        <WeatherInfo>
          <WeatherIcon>
            <Image
              image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              title={description}></Image>
          </WeatherIcon>
          <WeatherTemp>
            <span>Avg Temperature t°</span>
            <div>
              {temp} <span>°C</span>
            </div>
          </WeatherTemp>
          <WeatherList>
            <li>
              Pop:
              <span> {pop}%</span>
            </li>
            <li>
              Humidity:
              <span> {humidity}%</span>
            </li>
            <li>
              wind:
              <span> {windSpeed}</span> m/s
            </li>
          </WeatherList>
        </WeatherInfo>
        <WeatherOtherInfo>
          <WeatherCity>
            {params.name}
            {params.country && ','}{' '}
            <span>{params.country}</span>
          </WeatherCity>
          <div>Population: {population}</div>
          <div>{date}</div>
          <div>{description}</div>
        </WeatherOtherInfo>
      </WeatherData>
    </MainWrapper>
  )
}
