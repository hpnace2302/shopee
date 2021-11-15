import { createSelector } from "reselect";

const cartState = state => state.cartReducer

export const getErrorAddCart = createSelector(
  cartState,
  item => item.error
)

export const getItemsCart = createSelector(
  cartState,
  item => item.countItems
)

export const getDataItemsCart = createSelector(
  cartState,
  item => item.dataCart
)

export const getTotalMoneyCart = createSelector(
  cartState,
  item => item.totalMoney
)