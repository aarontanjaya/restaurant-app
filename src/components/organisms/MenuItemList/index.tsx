import React from "react";
import { CardMenuItem } from "@/components/molecules";
import { MenuItemListProps } from "../interface";
import styles from "./styles.module.scss";
const MenuItemList: React.FC<MenuItemListProps> = ({ category }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{category.name}</h3>
      <div className={styles.list__item}>
        {category.items
          ? category.items.map((item) => (
              <CardMenuItem title={item.name} imgUrl={item.thumbImages[0]} />
            ))
          : null}
      </div>
    </div>
  );
};

export default MenuItemList;
