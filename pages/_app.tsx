import { AppProps as Props } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface AppProps extends Props {
  Component: Props["Component"];
  pageProps: { session: Session; pageProps: Props["pageProps"] };
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
