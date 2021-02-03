import { all } from "redux-saga/effects";
import { getProductsSaga } from "./sagaGetProducts";

export function* watchSagas() {
  yield all([getProductsSaga()]);
}
