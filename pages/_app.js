import React from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Goals</title>
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
