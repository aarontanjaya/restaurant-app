import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { colors } from "@/styles/variables";
import { CartProvider } from "@/components/providers/CartProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
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
