import React, { ReactNode } from "react";

interface ProductProps {
  children: ReactNode;
}

const layout = ({ children }: ProductProps) => {
  return <>{children}</>;
};

export default layout;
