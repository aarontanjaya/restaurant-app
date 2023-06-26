import React from "react";
import { useState, useEffect } from "react";
import { HomeProps } from "../interfaces";
import { CardMenuItem } from "@/components/molecules";
import { MenuItemList, OrderDrawer } from "@/components/organisms";
import { MenuResponse } from "@/components/entity/api";
import { Category, MenuItem } from "@/components/entity";
import useFetch from "@/hooks/useFetch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/variables";
import styles from "./styles.module.scss";

const Home: React.FC<HomeProps> = ({}) => {
  const [data, setData] = useState<Category[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const isDesktop = useMediaQuery(`(min-width:${breakpoints.tablet})`);
  const isDesktopLarge = useMediaQuery(`(min-width:${breakpoints.desktop})`);
  const {
    data: res,
    loading,
    error,
    errorMessage,
  } = useFetch<MenuResponse>(`${process.env.REACT_APP_URL}/api/menu`);

  const handleItemClick = (item: MenuItem) => {
    setOpenDrawer(true);
    setSelectedItem(item);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  useEffect(() => {
    setData(res ? res.categories : data);
  }, [loading]);

  return (
    <div className={styles.container}>
      {data
        ? data.map((item, idx) => {
            return (
              <MenuItemList
                key={`list-${item.ID ? item.ID : idx}`}
                onItemClick={handleItemClick}
                category={item}
              />
            );
          })
        : null}
      <OrderDrawer
        onClose={handleDrawerClose}
        onCloseDrawer={handleDrawerClose}
        placement={isDesktop ? "right" : "bottom"}
        height={"100%"}
        width={isDesktopLarge ? 500 : 400}
        open={openDrawer}
        item={selectedItem}
      />
    </div>
  );
};

export default Home;
