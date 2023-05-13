import React, { ReactNode } from "react";
import { FormProvider } from "react-hook-form";

interface WrapperProps {
  onSubmit: () => void;
  children: ReactNode;
  formMethods: any;
}

export const Wrapper = (props: WrapperProps) => {
  return (
    <FormProvider {...props.formMethods}>
      <form
        className="mx-auto max-w-sm p-4 shadow rounded-sm space-y-4"
        onSubmit={props.onSubmit}
      >
        {props.children}
      </form>
    </FormProvider>
  );
};
