import React from "react";
import { ButtonProps as AntdButtonProps } from "antd";
import { AliasToken } from "antd/es/theme/internal";

export type CustomStyleProps = {
  customStyle?: Partial<AliasToken> | undefined;
};
export type ButtonProps = AntdButtonProps & CustomStyleProps;

export interface CardProps extends React.ComponentProps<"div"> {
  type: string;
}
