import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { GlobalStyle } from "../styles/global-style";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "../slices";
import Toast from "@/components/Toast";
import { DefaultSeo } from "next-seo";
import { DEFAULT_SEO } from "../config/seo";
import Head from "next/head";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { structuredData } from "config/structData";
import Persist from "@/components/Persist";

const store = createStore(rootReducer, composeWithDevTools());

export default function MyApp({ Component, pageProps }) {
  axios.defaults.withCredentials = true;

  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <meta
            name="naver-site-verification"
            content="111c529cb0bdc53bd139b4676623e3701ccd8ef0"
          ></meta>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          ></meta>
          <link rel="icon" type="image/png" href="/favicon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>
        <GlobalStyle />
        <Persist />
        <DefaultSeo {...DEFAULT_SEO} />
        <Toast />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
