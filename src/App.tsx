import { FC, useState } from 'react'

import { Loading } from './components/common'
import { WeatherContent } from './components/common/Routes'

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  return isLoading ? <Loading /> : <WeatherContent />
}
