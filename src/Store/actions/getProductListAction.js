import * as actionTypes from "../types/getProductsTypes";

//create action creator fn for fire saga
//and : receive req data
export const productListRequest = () => ({
  type: actionTypes.GET_PRODUCTLIST_REQUEST,
});
export const productListResponse = (payload) => ({
  type: actionTypes.PRODUCTLIST_RESPONSE,
  payload,
});

//get Product details request and response
export const getProductDetailsRequest = (payload) => ({
  type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
  payload,
});
export const productDetailsResponse = (payload) => ({
  type: actionTypes.PRODUCT_DETAILS_RESPONSE,
  payload,
});
