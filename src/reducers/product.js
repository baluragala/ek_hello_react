import {
  GET_PRODUCTS,
  GET_PRODUCT,
  ADD_PRODUCT,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_SUCCESS
} from "../actionTypes/product";

export function productReducer(
  prevState = {
    products: [],
    favourites: [],
    isLoading: false
  },
  action
) {
  console.log("productReducer", action);
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...prevState, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...prevState, isLoading: false, products: action.products };
    case GET_PRODUCTS_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    case GET_PRODUCT:
      return { ...prevState, isLoading: true };
    case GET_PRODUCT_SUCCESS:
      return { ...prevState, isLoading: false, product: action.product };
    case GET_PRODUCT_FAILURE:
      return { ...prevState, isLoading: false, error: action.error };
    case ADD_PRODUCT:
      return {};
    default:
      return prevState;
  }
}
