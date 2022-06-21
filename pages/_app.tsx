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

const store = createStore(rootReducer, composeWithDevTools());

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Head>
          <link rel="icon" type="image/png" href="/favicon.svg" />
        </Head>
        <GlobalStyle />
        <DefaultSeo {...DEFAULT_SEO} />
        <Toast />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
