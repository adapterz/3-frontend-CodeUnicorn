import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <script
              defer
              type="text/javascript"
              src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js"
              charSet="utf-8"
            ></script>
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
