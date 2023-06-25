import React from "react";
import { ConfigProvider, Radio as AntdRadio } from "antd";
import { RadioProps } from "../interface";

const { Button } = AntdRadio;
const Radio: React.FC<RadioProps> & {
  Group: typeof AntdRadio.Group;
  Button: typeof Button;
} = ({ children, customStyle, ...props }) => {
  return (
    <ConfigProvider theme={{ token: customStyle }}>
      <AntdRadio {...props}>{children}</AntdRadio>
    </ConfigProvider>
  );
};

Radio.Group = AntdRadio.Group;
Radio.Button = Button;

export default Radio;
