import { call, put, takeLatest } from "redux-saga/effects";
import * as Api from "../../Network/Api";
import * as Action from "../actions/getProductListAction";
import * as types from "../types/getProductsTypes";

function* getProductsRequest({ payload }) {
  try {
    const response = yield call(Api.getProducts, payload);

    yield put(Action.productListResponse(response));
    console.log("response", response);
  } catch (err) {
    alert("There is an error ");
  }
}
export function* getProductsSaga() {
  yield takeLatest(types.GET_PRODUCTLIST_REQUEST, getProductsRequest);
}
