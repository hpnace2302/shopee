import * as actions from './actions'

const defaultState = {
  loadingDetail: true,
  detail: {},
  error: {},
  mess: {},
}

export const detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.START_GET_PRODUCT_BY_ID:
      return {
        ...state,
        ...{loading: action.loading}
      }
    case actions.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        ...{detail: action.detail, 
          error: {}, 
          mess: {}}
      }
    case actions.GET_PRODUCT_BY_ID_FAIL:
      return {
        ...state,
        ...{error: action.error, 
          detail: {}, 
          mess: {}}
      }
    case actions.GET_PRODUCT_BY_ID_NOT_FOUND:
      return {
        ...state,
        ...{error: {}, 
        detail: {}, 
        mess: action.mess}
      }
    default:
      return state;
  } 
}