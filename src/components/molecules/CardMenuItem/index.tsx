import React from "react";
import { Button, Image } from "@/components/atoms";
import Card from "../Card";
import { MockMenuItem } from "../interface";
import { colors } from "@/styles/variables";
import { PlusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const CardMenuItem: React.FC<MockMenuItem> = ({ imgUrl, title }) => {
  return (
    <Card className={styles.container}>
      <Image imgClassName={styles.image} src={imgUrl} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <Button
          className={styles.button}
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
        ></Button>
      </div>
    </Card>
  );
};

export default CardMenuItem;
