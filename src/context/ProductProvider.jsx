import { createContext, useReducer } from "react";
import {
  ADD_TO_CART,
  DELETE,
  GET_CART,
  GET_PRODUCTS,
  GET_REVIEWS,
  SET_QUANTITY,
} from "./actions";

const INITIAL_PRODUCTS = {
  products: [],
  cart: [],
  reviews : []
};

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_PRODUCTS);

  function reducer(state, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return { ...state, products: [...action.payload] };
      case GET_CART:
        return { ...state, cart: [...action.payload] };
      case ADD_TO_CART:
        return { ...state, cart: [...state.cart, action.payload] };
      case SET_QUANTITY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case DELETE:
        return {
          ...state,
          card: state.card.filter(
            (product) => product.id !== action.payload.id
          ),
        };
      case GET_REVIEWS:
        return { ...state, reviews: [...action.payload] };
      default:
        return state;
    }
  }

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}
