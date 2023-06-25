import React from "react";
import { CardMenuItem } from "@/components/molecules";
import { MenuItemListProps } from "../interface";
import styles from "./styles.module.scss";
const MenuItemList: React.FC<MenuItemListProps> = ({
  category,
  onItemClick,
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{category.name}</h3>
      <div className={styles.list__item}>
        {category.items
          ? category.items.map((item, idx) => (
              <CardMenuItem
                key={`${item.ID}-${idx}`}
                item={item}
                onItemClick={onItemClick}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MenuItemList;
