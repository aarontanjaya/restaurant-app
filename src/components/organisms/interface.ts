import { Category, MenuItem } from "../entity";
import { DrawerProps } from "antd";
export interface MenuItemListProps {
  category: Category;
  onItemClick: (item: MenuItem) => void;
}

export type OrderDrawerProps = DrawerProps & {
  item: MenuItem | null;
  onCloseDrawer: () => void;
};

export type CartDrawerProps = DrawerProps & {
  onCloseDrawer: () => void;
};
