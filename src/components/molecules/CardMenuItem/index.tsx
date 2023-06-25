import React from "react";
import { Button, Image } from "@/components/atoms";
import Card from "../Card";
import { CardMenuItemProps } from "../interface";
import { colors } from "@/styles/variables";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const CardMenuItem: React.FC<CardMenuItemProps> = ({ item, onItemClick }) => {
  return (
    <Card className={styles.container}>
      <Image
        imgClassName={styles.image}
        src={item.thumbImages ? item.thumbImages[0] : ""}
      />
      <div className={styles.content}>
        <h3>{item.name}</h3>
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
