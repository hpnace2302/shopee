import {createSelector} from 'reselect'

const detailState = state => state.detailReducer;

export const getLoadingDetail = createSelector(
  detailState,
  item => item.loadingDetailMatch
)

export const getDataDetailProduct = createSelector(
  detailState,
  item => item.detail
)

export const getErrorDetailProduct = createSelector(
  detailState,
  item => item.error
)

export const getMessNotFoundDataProduct = createSelector(
  detailState,
  item => item.mess
)