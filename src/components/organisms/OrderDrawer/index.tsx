import React from "react";
import { Drawer, Form } from "antd";
import { OrderDrawerProps } from "../interface";
import { Button, Image, Radio } from "@/components/atoms";
import { FormModifier } from "@/components/molecules";
import styles from "./styles.module.scss";

const { useForm } = Form;

const OrderDrawer: React.FC<OrderDrawerProps> = ({ item, open, ...props }) => {
  const description = item?.description ? <p>{item.description}</p> : null;
  const [form] = useForm();
  return (
    <Drawer open={item ? item && open : false} {...props}>
      {item ? (
        <div>
          <Image
            className={styles.img__product__container}
            imgClassName={styles.img__product}
            src={item.images[0]}
          />
          <h2>{item.name}</h2>
          {description}
          <Form
            form={form}
            name="modifiers"
            onFinish={(val) => {
              console.log(val);
              form.resetFields();
            }}
          >
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
