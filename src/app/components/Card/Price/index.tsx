import React from "react";
import { toCurrency } from "../../../helpers/toCurrency";

interface PriceProps {
  children: number;
}

export const Price = ({ children }: PriceProps) => {
  return <span className="mb-4 text-zinc-600">{toCurrency(children)}</span>;
};
