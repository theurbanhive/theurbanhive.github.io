import "@/styles/globals.css";
import theme from "@/utils/theme";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} withCssVariables>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
