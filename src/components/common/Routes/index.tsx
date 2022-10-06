import { FC } from 'react'
import {
  Routes,
  Route,
  Navigate,
  HashRouter,
} from 'react-router-dom'

import { Home, PageNotFound } from 'pages'

export const WeatherContent: FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="weather"
        element={<Navigate to="/" replace />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </HashRouter>
)
