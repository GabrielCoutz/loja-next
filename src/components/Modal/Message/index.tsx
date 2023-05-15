import React from "react";

interface MessageProps {
  children: string;
}

export const Message = ({ children }: MessageProps) => {
  return <span className="block text-slate-600 text-center">{children}</span>;
};
