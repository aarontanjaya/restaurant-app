import React from "react";
import {
  ButtonProps as AntdButtonProps,
  RadioProps as AntdRadioProps,
} from "antd";
import { AliasToken } from "antd/es/theme/internal";

export type CustomStyleProps = {
  customStyle?: Partial<AliasToken> | undefined;
};
export type ButtonProps = AntdButtonProps & CustomStyleProps;

export interface ImageProps extends React.ComponentProps<"img"> {
  imgClassName?: string;
}

export type RadioProps = AntdRadioProps & CustomStyleProps;
