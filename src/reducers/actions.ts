import { CartItem } from "@/components/entity";
export enum CartActionTypes {
  ADD = "ADD",
  REMOVE = "REMOVE",
  DECREMENT = "DECREMENT",
  CLEAR = "CLEAR",
}

export interface CartAction {
  type: CartActionTypes;
  payload: CartItem;
}
