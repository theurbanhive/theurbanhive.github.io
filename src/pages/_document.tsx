import { ColorSchemeScript } from "@mantine/core";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="bg-background">
      <Head>
        <meta name="robots" content="noindex" />
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />{" "}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
