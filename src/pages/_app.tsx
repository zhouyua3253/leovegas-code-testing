import React from "react";
import "../../styles/globals.css";
import { AppProps } from "next/app";
import PageLayout from "@Components/PageLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </React.StrictMode>
  );
}
