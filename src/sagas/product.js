import {
  put,
  takeLatest,
  takeEvery,
  throttle,
  take,
  fork,
  cancel
} from "redux-saga/effects";
import {
  getProductsSuccessActionCreator,
  getProductsFailureActionCreator,
  getProductFailureActionCreator,
  getProductSuccessActionCreator
} from "../actionCreators/product";
import { GET_PRODUCTS, GET_PRODUCT } from "../actionTypes/product";

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

function* getProduct(action) {
  try {
    let product = yield fetch(
      "http://localhost:4000/products/" + action.productId
    ).then(r => r.json());
    yield put(getProductSuccessActionCreator(product));
  } catch (error) {
    yield put(getProductFailureActionCreator(error));
  }
}

export function* productWatcher() {
  yield [
    takeLatest(GET_PRODUCTS, getProducts),
    takeLatest(GET_PRODUCT, getProduct)
  ];
  // let currTaskId;
  // for (;;) {
  //   yield take(GET_PRODUCTS); //throttle(3000, GET_PRODUCTS, getProducts);
  //   if (currTaskId && currTaskId.isRunning()) {
  //     console.log("cancelling previous task");
  //     yield cancel(currTaskId);
  //   }
  //   currTaskId = yield fork(getProducts);
  // }
}
