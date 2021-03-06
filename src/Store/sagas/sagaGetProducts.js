import { call, put, takeLatest } from "redux-saga/effects";
import * as Api from "../../Network/Api";
import * as Action from "../actions/getProductListAction";
import * as types from "../types/getProductsTypes";

function* getProductsRequest() {
  try {
    const response = yield call(Api.getProducts);

    yield put(Action.productListResponse(response.data));
  } catch (err) {
    alert("There is an error ");
  }
}

//product details
function* getProductsDetailsRequest(payload) {
  try {
    const response = yield call(Api.getSingleProductDetails, payload.payload);

    yield put(Action.productDetailsResponse(response.data));
    console.log("response single product", response);
  } catch (err) {
    console.log("error saga", err);
    alert("There is an error ");
  }
}
export function* getProductsSaga() {
  yield takeLatest(types.GET_PRODUCTLIST_REQUEST, getProductsRequest);
  yield takeLatest(
    types.GET_PRODUCT_DETAILS_REQUEST,
    getProductsDetailsRequest
  );
}
