import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
        <Head>
          <title>My top</title>
          <link key={1} rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
  </>;
}

export default MyApp;
