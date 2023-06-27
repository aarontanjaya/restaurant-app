import React, { useContext } from "react";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "@/components/atoms";
import { ButtonCartProps } from "../interface";
import { CartContext } from "@/components/providers/CartProvider";

import styles from "./styles.module.scss";
const ButtonCart: React.FC<ButtonCartProps> = ({ ...props }) => {
  const { cart } = useContext(CartContext);
  return (
    <Badge className={styles.cart__btn} count={cart.length}>
      <Button
        type="primary"
        shape="circle"
        icon={<ShoppingCartOutlined />}
        {...props}
      />
    </Badge>
  );
};

export default ButtonCart;
