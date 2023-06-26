import { CartAction } from "@/reducers/actions";
import { CartState } from "@/reducers/states";
import React from "react";

export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ICartContext {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}
