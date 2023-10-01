import Head from "next/head";
import { ReactElement } from "react";
import { Transactions } from "@/components/pages";
import { UserLayout } from "@/components/layout";

export default function TransactionsPage() {
  const test = "";
  return (
    <>
      <Head>
        <title>Transaction History</title>
        <meta name="description" content="transaction history" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <Transactions />
        </div>
      </main>
    </>
  );
}

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};
