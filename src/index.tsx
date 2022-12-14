import React from 'react'
import ReactDOM, { Root } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyles from 'assets/styles/globalStyles'

import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { persistor, store } from './store'

const root: Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

reportWebVitals()
