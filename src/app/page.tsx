"use client";

import { Card } from "../components/Card";

export default function Page() {
  return (
    <>
      <div className="px-4">
        <h1 className="text-center max-md:text-4xl text-6xl text-slate-800 font-bold">
          Bem vindo(a)!
        </h1>
        <span className="block text-center  max-md:text-xl text-2xl text-slate-600 font-regular mt-2">
          Olha só o que da pra fazer com o Next 13.4
        </span>
      </div>
      <Card.List />
    </>
  );
}
