import { FC } from 'react'

import {
  convertedLocalDate,
  weatherAverage,
  getCardBackground,
} from 'utils'
import { IWeatherMain } from 'types'

import {
  Item,
  MainWrapper,
  Span,
  TextWrapper,
  WeatherCity,
  WeatherData,
  WeatherIcon,
  WeatherInfo,
  WeatherList,
  WeatherOtherInfo,
  WeatherTemp,
} from './styled'
import { Image } from '../Image'

export const WeatherMain: FC<IWeatherMain> = ({
  params,
  currentWeather,
}) => {
  const date: string = convertedLocalDate(
    currentWeather.weather[0].dt_txt,
  )
  const population: string =
    params.population.toLocaleString()
  const description: string =
    currentWeather.weather[0].weather[0].main
  const { icon } = currentWeather.weather[0].weather[0]
  const pop: string = (
    currentWeather.weather[0].pop * 100
  ).toFixed(0)
  const humidity: string =
    currentWeather.weather[0].main.humidity.toFixed(0)
  const windSpeed: string =
    currentWeather.weather[0].wind.speed.toFixed(1)
  const temp: string = weatherAverage(
    currentWeather.weather,
  ).toFixed(0)

  return (
    <MainWrapper
      background={description}
      image={getCardBackground(description)}>
      <WeatherData>
        <WeatherInfo>
          <WeatherIcon>
            <Image
              image={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              title={description}
            />
          </WeatherIcon>
          <WeatherTemp>
            <Span>Avg Temperature t°</Span>
            <TextWrapper>
              {temp} <Span>°C</Span>
            </TextWrapper>
          </WeatherTemp>
          <WeatherList>
            <Item>
              Pop:
              <Span> {pop}%</Span>
            </Item>
            <Item>
              Humidity:
              <Span> {humidity}%</Span>
            </Item>
            <Item>
              wind:
              <Span> {windSpeed}</Span> m/s
            </Item>
          </WeatherList>
        </WeatherInfo>
        <WeatherOtherInfo>
          <WeatherCity>
            {params.name}
            {params.country && ','}{' '}
            <Span>{params.country}</Span>
          </WeatherCity>
          <TextWrapper>
            Population:
            {population}
          </TextWrapper>
          <TextWrapper>{date}</TextWrapper>
          <TextWrapper>{description}</TextWrapper>
        </WeatherOtherInfo>
      </WeatherData>
    </MainWrapper>
  )
}
