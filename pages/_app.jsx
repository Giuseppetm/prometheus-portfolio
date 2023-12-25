
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import fonts from "@/Utils/fonts";
import '../src/index.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giuseppe Del Campo" />
        <link rel="icon" href="logo.png" />
      </Head>
      <main className={fonts.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
