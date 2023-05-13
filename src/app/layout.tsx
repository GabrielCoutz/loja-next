import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";
import { Header } from "../components/Header";

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
        <Header />
        {props.children}
      </body>
    </html>
  );
}
