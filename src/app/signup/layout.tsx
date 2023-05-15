import React, { ReactNode } from "react";

interface ISignupLayout {
  children: ReactNode;
  modal: ReactNode;
}

const SignupLayout = ({ children, modal }: ISignupLayout) => {
  console.log(modal);

  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default SignupLayout;
