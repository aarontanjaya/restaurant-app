import { ItemModifier, MenuItem } from "../entity";
import { ModifierGroup } from "../entity";
export interface CardMenuItemProps {
  item: MenuItem;
  onItemClick?: (val: MenuItem) => void;
}

export interface CardProps extends React.ComponentProps<"div"> {
  type?: string;
}

export interface FormModifierProps {
  modifiers: ModifierGroup[];
}

export interface ModifierLabelProps {
  modifier: ItemModifier;
}
