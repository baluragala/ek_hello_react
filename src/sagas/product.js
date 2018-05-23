import { put, takeLatest } from "redux-saga/effects";
import {
  getProductsSuccessActionCreator,
  getProductsFailureActionCreator
} from "../actionCreators/product";
import { GET_PRODUCTS } from "../actionTypes/product";

function* getProducts() {
  try {
    let products = yield fetch("http://localhost:4000/products").then(r =>
      r.json()
    );
    yield put(getProductsSuccessActionCreator(products));
  } catch (error) {
    yield put(getProductsFailureActionCreator(error));
  }
}

export function* productWatcher() {
  yield takeLatest(GET_PRODUCTS, getProducts);
}
