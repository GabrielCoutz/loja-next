import React from "react";

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-center text-xl font-bold text-slate-800">{children}</h1>
  );
};
