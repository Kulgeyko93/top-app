import Head from 'next/head';
import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
        <Head>
        <title>My top</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
  </>;
}

export default MyApp;
