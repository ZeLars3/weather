import { FC } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import { Home, PageNotFound } from 'pages'

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
