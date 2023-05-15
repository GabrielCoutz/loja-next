import React from "react";
import { ButtonProps } from "..";

export const Danger = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled || props.loading}
      type={props.type}
      className={`py-2 px-4 rounded bg-red-600 text-white disabled:bg-red-200 disabled:cursor-not-allowed ${
        props.fullWidth ? "w-full" : ""
      }`}
    >
      {props.loading ? "Aguarde..." : props.children}
    </button>
  );
};
