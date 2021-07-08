import React from "react";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "@store";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = React.useRef<any>(null);
  if (typeof queryClientRef.current !== "undefined") {
    queryClientRef.current = new QueryClient();
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
export default MyApp;
