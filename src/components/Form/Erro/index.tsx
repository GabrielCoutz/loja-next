"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

interface ErroProps {
  field: string;
}

export const Erro = ({ field }: ErroProps) => {
  const {
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[field]?.message?.toString();

  if (errorMessage)
    return (
      <span className="text-red-400 font-medium text-sm">{errorMessage}</span>
    );
  return null;
};
