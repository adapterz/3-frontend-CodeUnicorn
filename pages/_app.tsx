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
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS

const store = createStore(rootReducer, composeWithDevTools());

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </SessionProvider>
  );
}
