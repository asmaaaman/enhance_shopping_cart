import * as types from "../types/getProductsTypes";

const INITIAL_STATE = { fetching: false, error: null, products: [] };

const productListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.PRODUCTLIST_RESPONSE:
      return {
        ...state,
        products: action.payload,
        fetching: true,
        error: null,
      };

    default:
      return state;
  }
};
export default productListReducer;
