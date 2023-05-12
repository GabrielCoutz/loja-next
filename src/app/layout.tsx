import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";

import "./globals.css";

export const metadata = {
  title: "Lojinha maneira",
  description: "Loja criada para testar e conhecer o Next 13.4",
};

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}`}>
        <header className="bg-slate-700 p-4 text-white mb-8 shadow-lg sticky top-0">
          <nav>
            <Link href="/" className="p-4">
              Home
            </Link>
          </nav>
        </header>
        {props.children}
      </body>
    </html>
  );
}
