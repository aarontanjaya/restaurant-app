import React from "react";
import { Button } from "@/components/atoms";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { ButtonQuantityProps } from "../interface";
import styles from "./styles.module.scss";
const ButtonQuantity: React.FC<ButtonQuantityProps> = ({
  className,
  onIncrement,
  onDecrement,
  value,
  ...props
}) => {
  return (
    <div className={`${className} ${styles.container}`} {...props}>
      <Button
        className={styles.button}
        type="primary"
        shape="circle"
        onClick={() => onDecrement()}
        icon={<MinusOutlined />}
      />
      <p className={styles.value}>{value}</p>
      <Button
        className={styles.button}
        type="primary"
        shape="circle"
        onClick={() => onIncrement()}
        icon={<PlusOutlined />}
      />
    </div>
  );
};

export default ButtonQuantity;
