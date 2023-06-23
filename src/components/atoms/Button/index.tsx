import React from "react";
import { ButtonProps } from "../interface";
import { Button as AntdButton } from "antd";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <AntdButton {...props}></AntdButton>;
};

export default Button;
