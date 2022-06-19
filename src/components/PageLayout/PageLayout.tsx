import React, { ReactNode } from "react";
import Header from "@Components/Header";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Header />

      <main>{children}</main>

      <footer className="flex flex-col items-center p-10">
        <p className="text-lg font-semibold">Movie Gallery</p>
        <p className="text-sm text-slate-500 mt-1">Created by Yumin</p>
      </footer>
    </div>
  );
}
