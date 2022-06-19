import React from "react";
import Head from "next/head";

export default function WatchListPage() {
  const title = "Movie Gallery - Watch Later";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <div className="min-h-screen">WATCH LIST</div>
    </>
  );
}
