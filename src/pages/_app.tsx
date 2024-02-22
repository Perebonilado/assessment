import type { AppProps } from "next/app";
import "../config/tailwind/main.css";
import "../config/tailwind/chrome-bug.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
