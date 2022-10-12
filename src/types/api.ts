import { ApexOptions } from 'apexcharts'

export interface IResponseCity {
  country: string
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
  cod: string
}

interface IWeather {
  description: string
  main: string
  icon: string
}

interface IWeatherMain {
  temp: number
  temp_min: number
  temp_max: number
  humidity: number
}

export interface ICity {
  id: number
  lat: number
  lon: number
  name_ru: string
  name_en: string
}

export interface IRegion {
  id: number
  lat: number
  lon: number
  name_ru: string
  name_en: string
}

export interface ICountry {
  id: number
  continent: string
  lat: number
  lon: number
  name_ru: string
  name_en: string
}

export interface IUserResponseLocation {
  ip: string
  city: ICity
  region: IRegion
  country: ICountry
}

export interface IResponseListItem {
  clouds: {
    all: number
  }
  dt: number
  dt_txt: string
  pop: number
  visibility: number
  weather: IWeather[]
  main: IWeatherMain
  wind: {
    speed: number
  }
}

export interface ResponseType {
  city: IResponseCity | null
  list: IResponseListItem[]
}

export interface IChart {
  series: [
    {
      name: string
      data: number[]
    }
  ]
  options: ApexOptions
}
