import React, { useState } from "react";
import { Button, Image } from "@/components/atoms";
import Card from "../Card";
import { CardTransactionProps } from "../interface";
import { colors } from "@/styles/variables";
import { formatAmount, getNumberOrDefault } from "@/helpers/accounting";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const CardTransaction: React.FC<CardTransactionProps> = ({ item }) => {
  const [show, setShow] = useState<boolean>(false);

  const footer = show ? (
    <Button
      className={styles.button}
      onClick={() => setShow(false)}
      type="text"
    >
      <UpOutlined color={colors.redPrimary} />
    </Button>
  ) : (
    <Button className={styles.button} onClick={() => setShow(true)} type="text">
      <DownOutlined color={colors.redPrimary} />
    </Button>
  );
  return (
    <Card className={styles.container}>
      <div className={styles.content__container}>
        <Image
          imgClassName={styles.image}
          src={
            item.items[0] && item.items[0].item.thumbImages[0]
              ? item.items[0].item.thumbImages[0]
              : ""
          }
        />
        <div className={styles.content}>
          <h4 className={styles.item__name}>{item.items[0].item.name}</h4>
          <p>{`Subtotal Rp. ${formatAmount(
            getNumberOrDefault(item.totalPrice)
          )}`}</p>

          {show ? (
            <>
              <h4 className={styles.text__breakdown}>Order Breakdown</h4>
              {item.items.map((item) => (
                <div className={styles.item__container}>
                  <div className={styles.item__detail}>
                    <p className={styles.item__name}>{item.item.name}</p>
                    <p
                      className={styles.item__quantity}
                    >{`${item.quantity}x`}</p>
                  </div>
                  <p>{`Rp. ${formatAmount(getNumberOrDefault(item.price))}`}</p>
                </div>
              ))}
            </>
          ) : null}
          <p className={styles.date}>{`Ordered at ${item.date}`}</p>
        </div>
      </div>
      {item.items.length > 1 ? footer : null}
    </Card>
  );
};

export default CardTransaction;
