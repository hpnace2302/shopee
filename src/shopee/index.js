import React from 'react'
import './font-awesome/css/fontawesome-all.min.css'
import './assets/grid.css'
import './assets/base.css'
import './assets/main.css'
import './assets/responsive.css'
// import LayoutShopee from './component/layout'
import RoutesApp from './routes/index'
import { Provider } from 'react-redux'
import configStore from './store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Skeleton } from 'antd'

const { store, persistor } = configStore()

const Shopee = () => {
  document.title = 'Shopee Fake'
  return (
  <Provider store={store}>
    <PersistGate loading={<Skeleton active/>} persistor={persistor}>
      <RoutesApp/>  
    </PersistGate>
  </Provider>
  )
}

export default React.memo(Shopee)