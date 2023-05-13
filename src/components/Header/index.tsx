import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="bg-slate-700 p-4 text-white mb-8 shadow-lg sticky top-0 flex justify-between">
      <nav>
        <Link href="/" className="p-4">
          Home
        </Link>
      </nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/signup" className="p-4">
            Cadastre-se
          </Link>
        </li>
        <li>
          <Link href="/login" className="p-4">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
};
