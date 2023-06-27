import React from "react";
import { useState, useEffect } from "react";
import { HomeProps } from "../interfaces";
import { ButtonCart, CardMenuItem } from "@/components/molecules";
import { CartDrawer, MenuItemList, OrderDrawer } from "@/components/organisms";
import { MenuResponse } from "@/components/entity/api";
import { Category, MenuItem } from "@/components/entity";
import useFetch from "@/hooks/useFetch";
import useMediaQuery from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/variables";
import styles from "./styles.module.scss";
import { Button } from "@/components/atoms";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Home: React.FC<HomeProps> = ({}) => {
  const [data, setData] = useState<Category[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [openOrderDrawer, setOpenOrderDrawer] = useState<boolean>(false);
  const [openCartDrawer, setOpenCartDrawer] = useState<boolean>(false);
  const isDesktop = useMediaQuery(`(min-width:${breakpoints.tablet})`);
  const isDesktopLarge = useMediaQuery(`(min-width:${breakpoints.desktop})`);
  const {
    data: res,
    loading,
    error,
    errorMessage,
  } = useFetch<MenuResponse>(`${process.env.REACT_APP_URL}/api/menu`);

  const handleItemClick = (item: MenuItem) => {
    setOpenOrderDrawer(true);
    setSelectedItem(item);
  };

  const handleDrawerClose = () => {
    setOpenOrderDrawer(false);
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
      <ButtonCart onClick={() => setOpenCartDrawer(true)} />
      <CartDrawer
        onClose={() => setOpenCartDrawer(false)}
        onCloseDrawer={() => setOpenCartDrawer(false)}
        open={openCartDrawer}
        placement={isDesktop ? "right" : "bottom"}
        height={"100%"}
        width={isDesktopLarge ? 500 : 400}
      />
      <OrderDrawer
        onClose={handleDrawerClose}
        onCloseDrawer={handleDrawerClose}
        placement={isDesktop ? "right" : "bottom"}
        height={"100%"}
        width={isDesktopLarge ? 500 : 400}
        open={openOrderDrawer}
        item={selectedItem}
      />
    </div>
  );
};

export default Home;
