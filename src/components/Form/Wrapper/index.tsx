import React, { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

interface WrapperProps {
  onSubmit: () => void;
  children: ReactNode;
  formMethods: any;
  className?: string;
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <FormProvider {...props.formMethods}>
      <form className={props.className} onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </FormProvider>
  );
};
