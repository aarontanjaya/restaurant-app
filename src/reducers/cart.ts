import { CartState } from "./states";
import { CartAction, CartActionTypes } from "./actions";
import { CartItem } from "@/components/entity";

export const cartInitialState: CartState = [];

export function cartReducer(state: CartState, action: CartAction): CartState {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      return state.find((item) => item.ID === payload.ID)
        ? state.map((item) =>
            item.ID === payload.ID
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          )
        : [...state, { ...payload, quantity: 1 }];
    case "REMOVE":
      return state.filter((item) => item.ID === payload.ID);
    case "DECREMENT":
      return state.find((item) => item.ID === payload.ID)?.quantity === 1
        ? state.filter((item) => item.ID !== payload.ID)
        : state.map((item) =>
            item.ID === payload.ID
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          );
    case "CLEAR":
      return cartInitialState;
    default:
      return state;
  }
}

export const addToCart = (item: CartItem): CartAction => ({
  type: CartActionTypes.ADD,
  payload: item,
});

export const removeFromCart = (item: CartItem): CartAction => ({
  type: CartActionTypes.REMOVE,
  payload: item,
});

export const decrementFromCart = (item: CartItem): CartAction => ({
  type: CartActionTypes.DECREMENT,
  payload: item,
});

export const clearCart = (item: CartItem): CartAction => ({
  type: CartActionTypes.CLEAR,
  payload: item,
});
