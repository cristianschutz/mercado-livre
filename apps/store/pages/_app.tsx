import { AppProps } from 'next/app';
import Head from 'next/head';
import { Header, Footer } from '../components';
import '../styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mercado Livre</title>
      </Head>
      <div>
        <main>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default CustomApp;
