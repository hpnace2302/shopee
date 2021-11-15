import { combineReducers } from 'redux'
import { homeReducer } from '../pages/home/reducer'
import { detailReducer } from '../pages/detail/reducer'
import { cartReducer } from '../pages/cart/reducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { connectRouter } from 'connected-react-router'
// import { loginReducer } from '../pages/login/reducer'

// mục đích chỉ lưu state data cart vào storage của redux persist
// storage chính là cookie trên trình duyệt
const configPersistCart = {
  key: 'shopping_data_cart',
  storage: storage,
  whiteList: ['dataCart', 'countItems', 'totalMoney']
}

// biến history sẽ được truyền từ store và chính là biến history trong thư mục helper
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  homeReducer,
  detailReducer,
  cartReducer: persistReducer(configPersistCart, cartReducer),
})

export default rootReducer