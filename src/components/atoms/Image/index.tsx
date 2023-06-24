import React from "react";
import { ImageProps } from "../interface";
import styles from "./styles.module.scss";

const Image: React.FC<ImageProps> = ({ className, imgClassName, ...props }) => {
  return (
    <div className={`${className ? className : ""}`}>
      <img
        className={`${imgClassName ? imgClassName : ""} ${styles.image} `}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default Image;
