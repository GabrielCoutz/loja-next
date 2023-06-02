import React, { PropsWithChildren } from "react";

interface WrapperProps extends PropsWithChildren {
  isSelected: boolean;
}

export const Wrapper = ({ children, isSelected }: WrapperProps) => {
  return <div className={isSelected ? "bg-indigo-300" : ""}>{children}</div>;
};
