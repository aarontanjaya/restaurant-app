import React, { useContext } from "react";
import { CartItemProps } from "../interface";
import { Button, Image } from "@/components/atoms";
import { ButtonQuantity } from "../index";
import { CartContext } from "@/components/providers/CartProvider";
import { addToCart, decrementFromCart } from "@/reducers/cart";
import { formatAmount } from "@/helpers/accounting";
import styles from "./styles.module.scss";

const CartItem: React.FC<CartItemProps> = ({ className, item, ...props }) => {
  const { dispatch } = useContext(CartContext);

  const handleIncrement = () => {
    dispatch(addToCart(item));
  };

  const handleDecrement = () => {
    dispatch(decrementFromCart(item));
  };
  return (
    <div className={`${className} ${styles.container}`} {...props}>
      <Image
        imgClassName={styles.image}
        src={item.item.thumbImages ? item.item.thumbImages[0] : ""}
      />
      <div className={styles.content}>
        <h3 className={styles.item__name}>{item.item.name}</h3>
        {item.modifiers
          ? item.modifiers.map((item) => (
              <p className={styles.modifier}>{"-" + item.name}</p>
            ))
          : null}
        {item.note ? <p>{item.note}</p> : null}
        <p className={styles.price}>{`Rp. ${formatAmount(
          item.price * item.quantity
        )}`}</p>
        <ButtonQuantity
          className={styles.button}
          onIncrement={() => handleIncrement()}
          onDecrement={() => handleDecrement()}
          value={item.quantity}
        />
      </div>
    </div>
  );
};

export default CartItem;
