import { CartItem, ModifierItem, MenuItem } from "../entity";
import { ModifierGroup, Order } from "../entity";

export type ButtonQuantityProps = React.ComponentProps<"div"> & {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
};
export interface CardMenuItemProps {
  item: MenuItem;
  onItemClick?: (val: MenuItem) => void;
}

export interface CardProps extends React.ComponentProps<"div"> {
  type?: string;
}

export interface CartItemProps extends React.ComponentProps<"div"> {
  item: CartItem;
}

export interface CardTransactionProps extends React.ComponentProps<"div"> {
  item: Order;
}

export interface FormModifierProps {
  modifiers: ModifierGroup[];
}

export interface ModifierLabelProps {
  modifier: ModifierItem;
}
