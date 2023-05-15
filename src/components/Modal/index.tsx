"use client";

import { useRouter } from "next/navigation";
import React, { MouseEvent, PropsWithChildren, useRef } from "react";

export const Modal = ({ children }: PropsWithChildren) => {
  const { back } = useRouter();
  const backgroundRef = useRef<null | HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    const clickedElement = e.target;
    const backgroundWasClicked = clickedElement === backgroundRef.current

    if (backgroundWasClicked) back();
  };

  return (
    <div
      className="fixed top-0 inset-x-0 overflow-hidden"
      onClick={handleOutsideClick}
    >
      <div
        className="flex items-center justify-center h-screen bg-gray-500/75 backdrop-blur hover:cursor-zoom-out p-16"
        ref={backgroundRef}
      >
        <div className="hover:cursor-default z-10">{children}</div>
      </div>
    </div>
  );
};
