import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actionTypes/product";

export function productReducer(
  prevState = {
    products: [],
    favourites: [],
    isLoading: false
  },
  action
) {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...prevState, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...prevState, isLoading: false, products: action.products };
    case GET_PRODUCTS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    case GET_PRODUCT:
      return {};
    case ADD_PRODUCT:
      return {};
    default:
      return prevState;
  }
}
