import React from "react";
import { Button, Image } from "@/components/atoms";
import Card from "../Card";
import { CardMenuItemProps } from "../interface";
import { formatAmount, getNumberOrDefault } from "@/helpers/accounting";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const CardMenuItem: React.FC<CardMenuItemProps> = ({ item, onItemClick }) => {
  const price = item.discountedPriceV2
    ? getNumberOrDefault(item.discountedPriceV2.amountInMinor)
    : getNumberOrDefault(item.priceV2.amountInMinor);
  return (
    <Card className={styles.container}>
      <Image
        imgClassName={styles.image}
        src={item.thumbImages ? item.thumbImages[0] : ""}
      />
      <div className={styles.content}>
        <h3 className={styles.item__name}>{item.name}</h3>
        {item.discountedPriceV2 &&
        item.discountedPriceV2.amountInMinor != item.priceV2.amountInMinor ? (
          <div className={styles.price__container}>
            <p className={styles.discount}>
              {formatAmount(
                getNumberOrDefault(item.priceV2.amountInMinor) / 100
              )}
            </p>
            <p>
              {formatAmount(
                getNumberOrDefault(item.discountedPriceV2.amountInMinor) / 100
              )}
            </p>
          </div>
        ) : (
          <div className={styles.price__container}>
            <p>
              {formatAmount(
                getNumberOrDefault(item.priceV2.amountInMinor) / 100
              )}
            </p>
          </div>
        )}
        <Button
          className={styles.button}
          type="primary"
          shape="circle"
          onClick={onItemClick ? () => onItemClick(item) : () => {}}
          icon={<PlusOutlined />}
        ></Button>
      </div>
    </Card>
  );
};

export default CardMenuItem;
