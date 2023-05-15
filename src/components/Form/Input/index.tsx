"use client";

import React, { HtmlHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
}

export const Input = (props: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasErro = !!errors[props.name]?.message?.toString();

  return (
    <input
      {...register(props.name)}
      id={props.name}
      className={`bg-zinc-200 rounded p-2 mt-1 transition outline-none focus:ring-2 focus:ring-indigo-500 active:ring-2 active:ring-indigo-500 ${
        hasErro ? "ring-2 ring-inset !ring-red-500" : ""
      }`}
      {...props}
    />
  );
};
