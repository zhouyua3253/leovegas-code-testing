import React from "react";
import "../../styles/globals.css";
import { AppProps } from "next/app";
import PageLayout from "@Components/PageLayout";
import { Provider } from "react-redux";
import store from "@Store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </Provider>
    </React.StrictMode>
  );
}
