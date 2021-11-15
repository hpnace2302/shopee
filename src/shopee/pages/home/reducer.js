import * as actions from './actions'

const initialState = {
  loading: false,
  allProduct: {},
  errorProduct: {},
  messageProduct: {},
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.START_GET_DATA_PRODUCT:
      return {
        ...state,
        ...{loading: action.start}
      }
    case actions.STOP_GET_DATA_PRODUCT:
      return {
        ...state,
        ...{loading: action.stop}
      }
    case actions.GET_DATA_PRODUCT_SUCCESS:
      return {
        ...state,
        ...{allProduct: action.data, 
          errorProduct: {}, 
          messageProduct: {}}
      }
    case actions.GET_DATA_PRODUCT_FAIL:
      return {
        ...state,
        ...{errorProduct: action.error, 
          allProduct: {}, 
          messageProduct: {}}
      }
    case actions.NOT_FOUND_DATA_PRODUCT:
      return {
        ...state,
        ...{errorProduct: {}, 
        allProduct: {}, 
        messageProduct: action.message}
      }
    default:
      return state;
  } 
}