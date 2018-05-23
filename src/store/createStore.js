import { productReducer } from "../reducers/product";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { productWatcher } from "../sagas/product";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  productReducer,
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(productWatcher);

export default store;
