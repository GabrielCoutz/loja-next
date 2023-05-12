import React from "react";

interface TitleProps {
  children: string;
}

export const Title = ({ children }: TitleProps) => {
  return <h3 className="mb-2 text-zinc-800">{children}</h3>;
};
