import React, { useContext, useEffect, useState } from "react";
import { Drawer } from "antd";
import { CartDrawerProps } from "../interface";
import { Button } from "@/components/atoms";
import { CartContext } from "@/components/providers/CartProvider";
import CartItem from "@/components/molecules/CartItem";
import styles from "./styles.module.scss";
const CartDrawer: React.FC<CartDrawerProps> = ({
  open,
  onClose,
  onCloseDrawer,
  ...props
}) => {
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cart]);
  return (
    <Drawer open={open} onClose={onClose} {...props}>
      {cart ? cart.map((item) => <CartItem item={item} />) : null}
      <p>{totalPrice}</p>
      <Button className={styles.btn__order} type="primary">
        Order Now
      </Button>
    </Drawer>
  );
};

export default CartDrawer;
