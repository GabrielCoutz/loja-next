import React from "react";
import { ButtonProps } from "..";

export const Primary = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled || props.loading}
      type={props.type}
      className={`py-2 px-4 rounded bg-indigo-600 text-white disabled:bg-indigo-200 disabled:cursor-not-allowed ${
        props.fullWidth ? "w-full" : ""
      }`}
    >
      {props.loading ? "Aguarde..." : props.children}
    </button>
  );
};
