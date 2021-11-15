import { createSelector } from 'reselect';

const homeState = state => state.homeReducer;

export const getLoadingProduct = createSelector(
  homeState,
  item => item.loading
);

export const getMessageNotFoundProduct = createSelector(
  homeState,
  item => item.messageProduct
);

export const getDataProducts = createSelector(
  homeState,
  item => item.allProduct
);

export const getDataProductAllProduct = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('allProducts')) {
      return item.allProducts;
    }
    return {}
  } 
)

export const getDataProductIphone = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('iphone')) {
      return item.iphone;
    }
    return {}
  } 
)

export const getDataProductAirpods = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('airpods')) {
      return item.airpods;
    }
    return {}
  } 
)

export const getDataProductApplewatch = createSelector(
  getDataProducts,
  item => {
    if(item.hasOwnProperty('applewatch')) {
      return item.applewatch;
    }
    return {}
  } 
)