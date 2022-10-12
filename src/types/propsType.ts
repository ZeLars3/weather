import { ResultDaysType } from 'utils'

import { IResponseCity } from './api'

export interface IImage {
  image: string
  title: string
}

export interface IEvent {
  description: string
}

export interface IThemeSwitcher {
  theme: string | (() => void)
  toggleTheme: any
}

export interface IWeatherItem {
  onChangeSelected: (value: number) => void
  active: boolean
  day: number
  weatherData: ResultDaysType
}

export interface IWeatherMain {
  params: IResponseCity
  currentWeather: ResultDaysType | any
}
