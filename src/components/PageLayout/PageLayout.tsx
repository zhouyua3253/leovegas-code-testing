import React, { ReactNode } from "react";
import Header from "@Components/Header";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Header />

      <main>{children}</main>

      <footer>This is footer</footer>
    </div>
  );
}
