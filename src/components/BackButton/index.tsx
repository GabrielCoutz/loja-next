"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const BackButton = () => {
  const { back } = useRouter();
  return (
    <button
      onClick={back}
      className="border transition rounded-full py-2 px-4 hover:border-gray-400"
    >
      Voltar
    </button>
  );
};
