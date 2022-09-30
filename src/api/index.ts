import axios, { AxiosInstance } from 'axios'

import { IUserResponseLocation, ResponseType } from '../types'

const API_APPID: string | undefined =
  process.env.REACT_APP_API_KEY
const instanceAxios: AxiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API_APPID}&lang=ru&units=metric&`
})

export const weatherApi = {
  async getWeather (name: string): Promise<ResponseType> {
    return await instanceAxios.get<ResponseType>(`&q=${name}`)
      .then(res => res.data)
  },
  async getCityFromIP (): Promise<IUserResponseLocation> {
    return await axios.get<IUserResponseLocation>('https://api.sypexgeo.net/')
      .then(res => res.data)
  }
}

console.log(weatherApi.getCityFromIP())
