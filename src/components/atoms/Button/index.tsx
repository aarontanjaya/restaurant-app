import React from "react";
import { ButtonProps } from "../interface";
import { Button as AntdButton, ConfigProvider } from "antd";

const Button: React.FC<ButtonProps> = ({ customStyle, ...props }) => {
  return (
    <ConfigProvider theme={{ token: customStyle }}>
      <AntdButton {...props}></AntdButton>
    </ConfigProvider>
  );
};

export default Button;
