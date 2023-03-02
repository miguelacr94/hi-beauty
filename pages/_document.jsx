import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="developer" content="atleugim" />
      </Head>
      <body className={`${process.env.isDebug ? "debug-screens" : ""}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
