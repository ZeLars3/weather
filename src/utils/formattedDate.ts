import { IResponseListItem } from 'types'

export interface ResultDaysType {
  day: number
  weather: IResponseListItem[]
}

export const formattedData = (
  data: IResponseListItem[],
): ResultDaysType[] => {
  const result: ResultDaysType[] = []
  let indexArr: number[] = []

  data.forEach((weatherItem) => {
    const key = new Date(weatherItem.dt_txt).getDate()
    const index = indexArr.indexOf(key)

    indexArr = [...Array.from(new Set(indexArr))]
    if (index !== -1) {
      result[index].weather.push(weatherItem)
    } else {
      result.push({ day: key, weather: [weatherItem] })
    }
    indexArr.push(key)
  })

  if (result[result.length - 1].weather.length < 2) {
    result.pop()
  }

  return result
}
