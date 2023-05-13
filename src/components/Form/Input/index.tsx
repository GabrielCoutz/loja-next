"use client";

import React, { HtmlHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
}

export const Input = (props: InputProps) => {
  const { register } = useFormContext();

  return (
    <input
      {...register(props.name)}
      className="bg-zinc-200 rounded"
      {...props}
    />
  );
};
