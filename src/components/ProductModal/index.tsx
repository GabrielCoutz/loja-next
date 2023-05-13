"use client";

import { useRouter } from "next/navigation";
import React, { MouseEvent, PropsWithChildren } from "react";

export const ProductModal = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();

  const handleOutsideClick = (e: MouseEvent) => {
    const clickedElement = (e.target as HTMLElement).tagName.toLowerCase();

    if (clickedElement !== "img") back();
  };

  return (
    <div
      className="fixed top-0 inset-x-0 overflow-hidden"
      onClick={handleOutsideClick}
    >
      <div className="flex items-center justify-center h-screen bg-gray-500/75 backdrop-blur hover:cursor-zoom-out p-16">
        <div className="hover:cursor-default">{children}</div>
      </div>
    </div>
  );
};
