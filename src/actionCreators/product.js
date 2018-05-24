import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE
} from "../actionTypes/product";

export function getProductsActionCreator() {
  return { type: GET_PRODUCTS };
}

export function getProductsSuccessActionCreator(products) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getProductsFailureActionCreator(error) {
  return {
    type: GET_PRODUCTS_FAILURE,
    error
  };
}

export function getProductActionCreator(productId) {
  return { type: GET_PRODUCT, productId };
}

export function getProductSuccessActionCreator(product) {
  return { type: GET_PRODUCT_SUCCESS, product };
}
export function getProductFailureActionCreator(error) {
  return { type: GET_PRODUCT_FAILURE, error };
}
export function addProductActionCreator(product) {
  return { type: ADD_PRODUCT, product };
}
