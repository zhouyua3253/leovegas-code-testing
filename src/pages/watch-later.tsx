import React from "react";
import Head from "next/head";

export default function WatchLaterPage() {
  const title = "Movie Gallery - Watch Later";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <div className="min-h-screen">WATCH LATER</div>
    </>
  );
}
