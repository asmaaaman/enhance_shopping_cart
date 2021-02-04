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
