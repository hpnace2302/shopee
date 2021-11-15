export const GET_PRODUCT_BY_ID = Symbol('GET_PRODUCT_BY_ID') 
export const START_GET_PRODUCT_BY_ID = Symbol('START_GET_PRODUCT_BY_ID')
export const GET_PRODUCT_BY_ID_SUCCESS = Symbol('GET_PRODUCT_BY_ID_SUCCESS')
export const GET_PRODUCT_BY_ID_FAIL = Symbol('GET_PRODUCT_BY_ID_FAIL')
export const GET_PRODUCT_BY_ID_NOT_FOUND = Symbol('GET_PRODUCT_BY_ID_NOT_FOUND')

export const getDataProductById = (id) => ({
  type: GET_PRODUCT_BY_ID,
  id
})

export const startGetDataProductById = (loading) => ({
  type: START_GET_PRODUCT_BY_ID,
  loading
})
export const getDataProductByIdSuccess = (detail) => ({
  type: GET_PRODUCT_BY_ID_SUCCESS,
  detail
})
export const getDataProductByIdFail = (error) => ({
  type: GET_PRODUCT_BY_ID_FAIL,
  error
})
export const getDataProductByIdNotFound = (mess) => ({
  type: GET_PRODUCT_BY_ID_NOT_FOUND,
  mess
})