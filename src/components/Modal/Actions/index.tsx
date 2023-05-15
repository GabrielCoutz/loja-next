import React, { PropsWithChildren } from "react";

export const Actions = ({ children }: PropsWithChildren) => {
  return <div className="flex gap-2 max-md:flex-col">{children}</div>;
};
