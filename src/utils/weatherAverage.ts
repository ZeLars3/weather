import { IResponseListItem } from '../types'

export const weatherAverage = (
  data: IResponseListItem[]
): number => {
  return (
    data.reduce((acc, item) => acc + item.main.temp, 0) /
    data.length
  )
}
