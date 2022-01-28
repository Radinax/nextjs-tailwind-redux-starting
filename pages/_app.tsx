import "../styles/globals.scss";

import type { AppProps } from "next/app";

import { wrapper } from "../config/store";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Adrian Beria Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Your title" />
        <meta property="og:image" content="Your preview image" />
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your keywords" />
        <meta name="author" content="Adrian Beria" />
        <link
          rel="canonical"
          href="https://react-graphql-nextjs-blog.vercel.app/"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
