import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import { Home, PageNotFound } from 'pages'

export const WeatherContent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
)
