import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import { colors } from "@/styles/variables";
import { Button } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.redPrimary,
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
