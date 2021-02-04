import * as types from "../types/getProductsTypes";

const INITIAL_STATE = {};

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_PRODUCTLIST_REQUEST:
    case types.PRODUCTLIST_RESPONSE:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    default:
      return state;
  }
};
export default productListReducer;
