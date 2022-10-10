import axios, { AxiosInstance } from 'axios'

import { IUserResponseLocation, ResponseType } from 'types'

const API_APPID: string = process.env.REACT_APP_API_KEY as string
const API_APPID_STORM: string = process.env.REACT_APP_API_KEY_STORM as string

const instanceAxios: AxiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API_APPID}&lang=ru&units=metric&`,
})

export const weatherApi = {
  async getWeather (name: string): Promise<ResponseType> {
    return await instanceAxios.get<ResponseType>(`&q=${name}`)
      .then(res => res.data)
  },
  async getWeatherHourly (name: string): Promise<any> {
    return await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?city=${name}&key=${API_APPID_STORM}&hours=48`)
      .then(res => res.data)
  },
  async getCityFromIP (): Promise<IUserResponseLocation> {
    return await axios.get<IUserResponseLocation>('https://api.sypexgeo.net/')
      .then(res => res.data)
  },
}

console.log(weatherApi.getWeatherHourly('minsk'))
