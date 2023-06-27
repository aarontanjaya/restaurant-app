import React, { useContext } from "react";
import { Drawer, Form } from "antd";
import { OrderDrawerProps } from "../interface";
import { Button, Image, Radio } from "@/components/atoms";
import { FormModifier } from "@/components/molecules";
import { CartItem, MenuItem, ModifierItem } from "@/components/entity";
import { getItemPrice } from "@/helpers/accounting";
import { CartContext } from "@/components/providers/CartProvider";
import { addToCart } from "@/reducers/cart";
import styles from "./styles.module.scss";

const { useForm } = Form;

const OrderDrawer: React.FC<OrderDrawerProps> = ({
  item,
  open,
  onClose,
  onCloseDrawer,
  ...props
}) => {
  const { dispatch } = useContext(CartContext);
  const description = item?.description ? (
    <p className={styles.description}>{item.description}</p>
  ) : null;
  const [form] = useForm();

  const handleFinish = (val: any) => {
    const item = val.item as MenuItem;
    let id = `${item.ID}`;
    var modifiers: ModifierItem[] = val.modifiers
      ? (val.modifiers as ModifierItem[])
      : [];
    modifiers = modifiers.filter((item) => (item ? true : false));
    let totalPrice = getItemPrice(item, modifiers);

    modifiers.forEach((item) => {
      id = id + "+" + item.ID;
    });
    form.resetFields();
    onCloseDrawer();

    let cartItem: CartItem = {
      ID: id,
      price: totalPrice,
      item: item,
      modifiers: modifiers,
      quantity: 1,
      note: "",
    };

    dispatch(addToCart(cartItem));
  };
  return (
    <Drawer open={item ? item && open : false} onClose={onClose} {...props}>
      {item ? (
        <div>
          <Image
            className={styles.img__product__container}
            imgClassName={styles.img__product}
            src={item.images[0]}
          />
          <h3 className={styles.item__name}>{item.name}</h3>
          {description}
          <Form form={form} name="modifiers" onFinish={handleFinish}>
            <Form.Item name="item" initialValue={item} />
            {item.modifierGroups ? (
              <FormModifier modifiers={item.modifierGroups} />
            ) : null}
            <Button
              className={styles.btn__submit}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
        </div>
      ) : null}
    </Drawer>
  );
};

export default OrderDrawer;
