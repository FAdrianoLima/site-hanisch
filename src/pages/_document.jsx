import Document, { Html, Head, Main, NextScript } from "next/document";

class DocumentosSite extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link  rel="icon" href="/favicon.png" />
          <title>Hanisch Medical</title>
          <meta name="description" content="Hanisch Medical" />
          <meta
            name="keywords"
            content=" "
          />
          <meta name="author" content="Hanisch Medical" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
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

export default DocumentosSite;
