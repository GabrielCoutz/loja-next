import React, { ReactNode } from "react";

interface ProductProps {
  children: ReactNode;
  photo: ReactNode;
}

const layout = ({ children, photo }: ProductProps) => {
  return (
    <>
      {photo}
      {children}
    </>
  );
};

export default layout;
