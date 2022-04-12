import type { AppProps } from "next/app";
import { css } from "linaria";

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    
    body {
      margin: 0px;
    }
    `;

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
