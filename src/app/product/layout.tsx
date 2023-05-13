import React, { ReactNode } from "react";

interface ProductProps {
  children: ReactNode;
  modal: ReactNode;
}

const layout = ({ children, modal }: ProductProps) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default layout;
