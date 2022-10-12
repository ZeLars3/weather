import { IResponseListItem } from 'types'

export const weatherAverage = (
  data: IResponseListItem[],
): number => (
  data.reduce((acc, item) => acc + item.main.temp, 0)
    / data.length
)
