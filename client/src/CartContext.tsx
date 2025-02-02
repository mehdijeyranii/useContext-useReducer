/* eslint-disable react-refresh/only-export-components */

import { createContext, useReducer, ReactNode, useContext } from "react";
import {
  CartAction,
  cartReducer,
  CartState,
  initialState,
} from "./cartReducer";

const CartContext = createContext<
  { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be inside CartProvider");
  }

  return context;
};
