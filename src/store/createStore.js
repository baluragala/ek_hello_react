import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { productWatcher } from "../sagas/product";
import logger from "redux-logger";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(productWatcher);

export default store;
