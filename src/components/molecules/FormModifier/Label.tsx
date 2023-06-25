import React from "react";
import { ModifierLabelProps } from "../interface";
import styles from "./label.module.scss";

const Label: React.FC<ModifierLabelProps> = ({ modifier }) => {
  return (
    <div className={styles.container}>
      <p>{modifier.name}</p>
    </div>
  );
};

export { Label };
