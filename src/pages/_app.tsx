import "@/styles/globals.scss";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ConfigProvider } from "antd";
import { colors } from "@/styles/variables";
import { CartProvider } from "@/components/providers/CartProvider";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <CartProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.redPrimary,
          },
        }}
      >
        <Component {...pageProps} />
      </ConfigProvider>
    </CartProvider>
  );
}
