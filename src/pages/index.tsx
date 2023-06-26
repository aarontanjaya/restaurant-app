import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { CardMenuItem } from "@/components/molecules";
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
