import { FC } from 'react'

import { Home, PageNotFound } from 'pages'

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

export const WeatherContent: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="weather"
        element={<Navigate to="/" replace />}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
