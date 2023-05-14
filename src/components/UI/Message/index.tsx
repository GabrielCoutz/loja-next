import React, { PropsWithChildren } from "react";

export const Message = ({ children }: PropsWithChildren) => {
  if (children)
    return (
      <span className="block text-red-500 font-medium text-sm my-2">
        {children}
      </span>
    );
  return null;
};
