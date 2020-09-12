import "../styles/index.css";
import Nav from "../components/nav";
//import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.png"></link>
    </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
