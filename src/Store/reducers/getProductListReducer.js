import * as types from "../types/getProductsTypes";

const INITIAL_STATE = {
  fetching: false,
  error: null,
  products: [],
  product: {},
};

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PRODUCTLIST_RESPONSE:
      return {
        ...state,
        products: action.payload,
        fetching: true,
        error: null,
      };
    case types.PRODUCT_DETAILS_RESPONSE:
      return {
        ...state,
        product: action.payload,
        fetching: true,
      };
    default:
      return state;
  }
};
export default productListReducer;
