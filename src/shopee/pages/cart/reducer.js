import * as actions from './actions'
// import { helper } from '../../helper/common'

const initialState = {
  loading: false,
  dataCart: [],
  countItems: 0,
  totalMoney: 0,
  error: {}
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.START_ADD_CART:
      return {
        ...state,
        ...{loading: action.loading}
      }
    case actions.ADD_CART_SUCCESS:
      // xử lý thêm sản phẩm vào giỏ hàng
      let infoProduct = action.data
      // kiểm tra xem giỏ hàng đã tồn tại chưa
      // nếu chưa tồn tại thì tạo mới giỏ hàng và thêm sản phẩm
      // nếu giở hàng có rồi thì thêm luôn
      // nếu sản phẩm thêm vào đã tồn tại trong giở hàng thì chỉ cập nhật số lượng mua
      if (state.dataCart === undefined || state.dataCart.length === 0) {
        // chưa tồn tại trong giỏ hàng
        // thêm sản phẩm luôn vào
        // mặc định luôn mua 1 sản phẩm
        infoProduct.qty = 1 // thêm 1 key value vào obj
        return {
          ...state,
          ...{
            dataCart: [...state.dataCart, infoProduct],
            error: {},
            countItems: state.countItems + 1,
            totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
          }
        }
      } else {
        // đã tồn tại trong giỏ hàng
        const idPd = infoProduct.id
        // kiểm tra xem id này có tồn tại trong giỏ hàng chưa
        // nếu chưa thì thêm mới
        // nếu có rồi thì cập nhật lại số lượng mua
        const searchPd = state.dataCart.filter(item => item.id === idPd)[0]
        if (searchPd !== undefined) {
          searchPd.qty += 1
          return {
            ...state,
            ...{
              error: {},
              totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
            }
          }
        } else {
          infoProduct.qty = 1
          return {
            ...state,
            ...{
              dataCart: [...state.dataCart, infoProduct],
              error: {},
              countItems: state.countItems + 1,
              totalMoney: parseInt(state.totalMoney) + parseInt(infoProduct.price)
            }
          }
        }
      }
    case actions.ADD_CART_FAIL:
      return {
        ...state,
        ...{error: action.error}
      }
    case actions.CHANGE_QUANTITY_ITEM_CART:
      const idItemCart = action.id
      let qtyChange = action.qty
      qtyChange = (qtyChange === null|| qtyChange === undefined || qtyChange === '') ? 1 : qtyChange
      // cập nhật lại số lượng mua của sản phẩm trong giỏ hàng với id tương ứng
      // cập nhật lại thông tin giỏ hàng ( có giỏ hàng mới )
      const newDataCart = state.dataCart.map(item => {
        return item.id === idItemCart ? {...item, qty: qtyChange} : item
      })
      // cập nhật lại thông tin tổng tiền
      const newTotalMoney = newDataCart.map(item => parseInt(item.qty* parseInt(item.price))).reduce((pre, next) => pre + next)
      // cập nhật state cart
      return {
        ...state,
        ...{
            totalMoney: newTotalMoney,
            error: {},
            dataCart: newDataCart,
          }
      }
    case actions.DELETE_ITEM_CART:
      // xử lý xoá sản phẩm
      const idDelItem = action.id 
      // lấy được toàn bộ thông tin của sản phẩm có id tương ứng
      // mục đích là để sau này cập nhật lại tổng tiền
      const delItem = state.dataCart.find(item => item.id === idDelItem)
      // hàm find k làm ảnh hưởng đến mảng ban đầu
      // xoá bỏ sản phẩm có id tương ứng ra khỏi giỏ hàng 
      // để cập nhật lại giỏ hàng 
      // cập nhật lại số lượng sản phẩm trong giỏ hàng
      const newDelCarts = state.dataCart.filter(item => item.id !== idDelItem)
      // tính lại tổng tiền
      const newTotalMoneyDel = state.totalMoney - (parseInt(delItem.price) * parseInt(delItem.qty))
      return {
        ...state,
        ...{
          totalMoney: newTotalMoneyDel,
          error: {},
          dataCart: newDelCarts,
          countItems: state.countItems - 1
        }
      }
    default: return state 
  }
}