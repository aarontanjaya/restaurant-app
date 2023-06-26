import Head from "next/head";
import { Transactions } from "@/components/pages";

export default function TransactionsPage() {
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
