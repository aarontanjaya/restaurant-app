import React, { useState } from "react";
import { Button, Image } from "@/components/atoms";
import Card from "../Card";
import { CardTransactionProps } from "../interface";
import { colors } from "@/styles/variables";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const CardTransaction: React.FC<CardTransactionProps> = ({ item }) => {
  const [show, setShow] = useState<boolean>(false);

  const footer = show ? (
    <Button
      onClick={() => setShow(false)}
      type="text"
      icon={<UpOutlined color={colors.redPrimary} />}
    />
  ) : (
    <Button
      onClick={() => setShow(true)}
      type="text"
      icon={<DownOutlined color={colors.redPrimary} />}
    />
  );
  return (
    <Card className={styles.container}>
      <Image
        imgClassName={styles.image}
        src={
          item.items[0] && item.items[0].item.thumbImages[0]
            ? item.items[0].item.thumbImages[0]
            : ""
        }
      />
      <div className={styles.content}>
        <h4>{item.items[0].item.name}</h4>
        <p>{item.totalPrice}</p>
        <p>{item.date}</p>
        {show
          ? item.items.map((item) => (
              <>
                <p>{item.item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
              </>
            ))
          : null}
        {item.items.length > 0 ? footer : null}
      </div>
    </Card>
  );
};

export default CardTransaction;
