"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode, useRef } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  const backgroundRef = useRef<null | HTMLDivElement>(null);
  const { back } = useRouter();

  const handleOutsideClick = (e: MouseEvent) => {
    const clickedElement = e.target;
    const backgroundWasClicked = clickedElement === backgroundRef.current;

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
        <div
          className={`hover:cursor-default z-10 bg-white rounded shadow-lg p-4 max-w-md space-y-6 ${className}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
