import axios, { AxiosInstance } from 'axios'

import { ResponseType } from '../types'

const API_APPID: string | undefined =
  process.env.REACT_APP_API_KEY
const instanceAxios: AxiosInstance = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API_APPID}&lang=ru&units=metric&`,
})

export const weatherApi = {
  getWeather(name: string) {
    return instanceAxios.get<ResponseType>(`&q=${name}`)
    .then(res => res.data);
  },
  getCurrentWeatherLocation(lat: number, long: number) {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_APPID}&lat=${lat}&lon=${long}`)
    .then(res => res.data)
  }
}
