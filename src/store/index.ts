import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './reducer'

type AppRootReducer = typeof rootReducer
export type RootStateType = ReturnType<AppRootReducer>

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () =>
  createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk)),
  )

const store = configureStore()
const persistor = persistStore(store)

export { store, persistor }
