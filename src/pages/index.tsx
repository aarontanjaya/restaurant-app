import Head from 'next/head';
import { ReactElement } from 'react';
import Image from 'next/image';
import { HomeProps } from '@/components/pages/interfaces';
import { UserLayout } from '@/components/layout';
import { Home } from '@/components/pages';
import type { GetServerSideProps } from 'next';

export default function HomePage({ data }: HomeProps) {
  return (
    <>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Your daily chef" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Home data={data} />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'public, max-age=10');
  const resp = await fetch(`${process.env.REACT_APP_URL}/api/menu`);
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
};
