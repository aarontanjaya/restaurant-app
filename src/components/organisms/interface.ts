import { Category, MenuItem } from "../entity";
import { DrawerProps } from "antd";
export interface MenuItemListProps {
  category: Category;
}

export type OrderDrawerProps = DrawerProps & {
  item: MenuItem;
};
