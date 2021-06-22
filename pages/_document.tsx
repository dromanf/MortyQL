import React from "react";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import theme from "@/modules/theming/theme";

// Example for material-ui with next-js:
// https://github.com/mui-org/material-ui/tree/master/examples/nextjs
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          {/* This is the color of the AppBar */}
          <meta name="theme-color" content={theme.palette.grey[900]} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  // Renderice la aplicación y la página y obtenga el contexto de la página con los efectos secundarios recopilados.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // El fragmento de estilos se renderiza después de que la aplicación y la página terminan.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
