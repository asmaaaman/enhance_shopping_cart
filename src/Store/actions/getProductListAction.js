import * as actionTypes from "../types/getProductsTypes";

//create action creator fn for fire saga
//and : receive req data
export const productListRequest = (payload) => ({
  type: actionTypes.GET_PRODUCTLIST_REQUEST,
  payload,
});
export const productListResponse = (payload) => ({
  type: actionTypes.PRODUCTLIST_RESPONSE,
  payload,
});
