import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../Header/Header';
export default function Layout({ title, children }) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <section>
      <Head>
        <title>{title ? title + ' - Waan Trading' : 'Waan Trading'}</title>
        <meta name="description" content="waan-trading website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        {path != '/login' && <Header />}
        <main className="container">{children}</main>
        <footer>footer</footer>
      </div>
    </section>
  );
}
