import React, { useContext, useEffect, useState } from "react";
import { Drawer } from "antd";
import { CartDrawerProps } from "../interface";
import { Button } from "@/components/atoms";
import { CartContext } from "@/components/providers/CartProvider";
import CartItem from "@/components/molecules/CartItem";
import styles from "./styles.module.scss";
import { Order } from "@/components/entity";
const CartDrawer: React.FC<CartDrawerProps> = ({
  open,
  onClose,
  onCloseDrawer,
  ...props
}) => {
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handlePlaceOrder = () => {
    let currentOrder: Order = {
      totalPrice: totalPrice,
      items: cart,
      date: new Date().toString(),
    };
    fetch(`${process.env.REACT_APP_URL}/api/order`, {
      method: "POST",
      body: JSON.stringify(currentOrder),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("datnya", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
      <Button
        onClick={() => handlePlaceOrder()}
        className={styles.btn__order}
        type="primary"
      >
        Order Now
      </Button>
    </Drawer>
  );
};

export default CartDrawer;
