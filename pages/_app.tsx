import { SnackbarProvider } from "@/contexts/SnackbarContext";
import { createEmotionCache } from "@/utils/createEmotionCache";
import { theme } from "@/utils/theme";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { AppProps as Props } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient();

export interface AppProps extends Props {
  Component: Props["Component"];
  emotionCache?: EmotionCache;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  emotionCache = clientSideEmotionCache,
}: AppProps & {
  pageProps: { session: Session; pageProps: Props["pageProps"] };
}) {
  return (
    <CacheProvider value={emotionCache}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </SnackbarProvider>
          <CssBaseline />
        </ThemeProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </CacheProvider>
  );
}
