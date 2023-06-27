import "@/styles/globals.scss";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { NextPage } from "next";
import { ConfigProvider } from "antd";
import { colors } from "@/styles/variables";
import { CartProvider } from "@/components/providers/CartProvider";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <main className={poppins.className}>
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
    </main>
  );
}
