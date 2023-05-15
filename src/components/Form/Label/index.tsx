import React, { HtmlHTMLAttributes, PropsWithChildren } from "react";

interface LabelProps
  extends PropsWithChildren<HtmlHTMLAttributes<HTMLLabelElement>> {
  htmlFor: string;
}

export const Label = (props: LabelProps) => {
  return (
    <label {...props} htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};
