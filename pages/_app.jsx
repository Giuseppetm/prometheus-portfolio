import 'bootstrap/dist/css/bootstrap.css';
import "../src/Fonts/Futura/stylesheet.css";
import "../src/Fonts/GeneralSans/general-sans.css";
import '../src/index.scss';
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Giuseppe Del Campo" />
        <link rel="icon" href="logo.png" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
