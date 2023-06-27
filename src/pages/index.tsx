import Head from "next/head";
import { ReactElement } from "react";
import Image from "next/image";
import { UserLayout } from "@/components/layout";
import { Home } from "@/components/pages";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Your daily chef" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Home />
        </div>
      </main>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
