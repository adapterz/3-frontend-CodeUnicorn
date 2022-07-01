import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import { GlobalStyle } from "../styles/global-style";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from "@/components/Footer";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
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

const store = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

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
          <link rel="icon" type="image/png" href="/favicon.svg" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />
        </Head>
        <GlobalStyle />
        <DefaultSeo {...DEFAULT_SEO} />
        <noscript id="google-tag-manager">
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WW7HMLH"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Toast />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
