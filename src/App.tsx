import { FC } from 'react'

import { Loading } from './components/common'
import { WeatherContent } from './components/common/Routes'

const isLoading: boolean = false

export const App: FC = () => {
  return isLoading ? <Loading /> : <WeatherContent />
}
