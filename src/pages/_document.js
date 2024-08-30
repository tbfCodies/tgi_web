// src/pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Lägg till andra meta-taggar eller länkar här */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
