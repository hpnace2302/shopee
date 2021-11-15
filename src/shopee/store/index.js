import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import history from '../helper/history'

const configRootPersist = {
  key: 'Shopping_React2105',
  storage: storage,
  whiteList: ['cartReducer'], // tên của reducer
  blackList: ['router'] 
} 

const rootReducerPersistent = persistReducer(configRootPersist, rootReducer(history))

const sagaMiddleware = createSagaMiddleware()

const configStore = (defaultState = {}) => {
  const store = createStore(
    rootReducerPersistent,
    defaultState,
    applyMiddleware(logger, sagaMiddleware)
  )
  // run saga
  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)
  return { store, persistor, history }
}

export default configStore