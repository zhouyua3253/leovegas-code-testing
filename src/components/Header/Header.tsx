import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 md:py-8 mb-2">
      <Link href="/">
        <a data-testid="home-page-link">
          <span className="text-xl md:text-2xl font-semibold">
            Movie Gallery
          </span>
        </a>
      </Link>

      <Link href="/watch-list">
        <a data-testid="watch-later-page-link">
          <span className="underline text-slate-500">Watch List</span>
        </a>
      </Link>
    </header>
  );
}
