import { CartItem, ModifierItem, MenuItem } from "../entity";
import { ModifierGroup } from "../entity";

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

export interface FormModifierProps {
  modifiers: ModifierGroup[];
}

export interface ModifierLabelProps {
  modifier: ModifierItem;
}
