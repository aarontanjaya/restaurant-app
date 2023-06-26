import React, { createContext, useEffect, useReducer } from "react";
import { CartState } from "@/reducers/states";
import { cartReducer, cartInitialState } from "@/reducers/cart";
import { ICartContext, ContextProviderProps } from "./interfaces";

export const CartContext = createContext<ICartContext>({
  cart: cartInitialState,
  dispatch: () => null,
});

export const CartProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
