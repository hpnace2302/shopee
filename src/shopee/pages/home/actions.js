export const GET_DATA_PRODUCT = Symbol('GET_DATA_PRODUCT')

export const START_GET_DATA_PRODUCT = Symbol('START_GET_DATA_PRODUCT')
export const STOP_GET_DATA_PRODUCT = Symbol('STOP_GET_DATA_PRODUCT')
export const GET_DATA_PRODUCT_SUCCESS = Symbol('GET_DATA_PRODUCT_SUCCESS')
export const GET_DATA_PRODUCT_FAIL = Symbol('GET_DATA_PRODUCT_FAIL')
export const NOT_FOUND_DATA_PRODUCT = Symbol('NOT_FOUND_DATA_PRODUCT')

export const getDataProducts = () => ({
  type: GET_DATA_PRODUCT,
})

export const startGetDataProduct = (start) => ({
  type: START_GET_DATA_PRODUCT,
  start
})

export const stopGetDataProduct = (stop) => ({
  type: STOP_GET_DATA_PRODUCT,
  stop
})

export const getDataProductSuccess = (data) => ({
  type: GET_DATA_PRODUCT_SUCCESS,
  data
})

export const getDataProductFail = (error) => ({
  type: GET_DATA_PRODUCT_FAIL,
  error
})

export const getDataProductNotFound = (message) => ({
  type: NOT_FOUND_DATA_PRODUCT,
  message
})