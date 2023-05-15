import React from "react";
import { ButtonProps } from "..";

export const Secondary = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled || props.loading}
      type={props.type}
      onClick={props.onClick}
      className={`py-2 px-4 rounded border-2 bg-white border-indigo-600 text-indigo-600 disabled:border-indigo-200 disabled:cursor-not-allowed ${
        props.fullWidth ? "w-full" : ""
      }`}
    >
      {props.loading ? "Aguarde..." : props.children}
    </button>
  );
};
