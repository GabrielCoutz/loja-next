import React from "react";
import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: "App de teste",
  description: "Generated by create next app",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt-br">
      <body>
        <header>header</header>
        {props.children}
      </body>
    </html>
  );
}
