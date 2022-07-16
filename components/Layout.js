import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Waan Trading' : 'Waan Trading'}</title>
        <meta name="description" content="waan-trading website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
