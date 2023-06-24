import React from "react";
import { CardProps } from "../interface";
import styles from "./styles.module.scss";
export default function Card({ className, children, ...props }: CardProps) {
  return (
    <div className={`${className ? className : ""} ${styles.card}`} {...props}>
      {children}
    </div>
  );
}
