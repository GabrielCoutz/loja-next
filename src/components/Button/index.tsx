import { Secondary } from "./Secondary";
import { Primary } from "./Primary";
import { Danger } from "./Danger";

export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  onClick?: () => void
}

export const Button = {
  Danger,
  Secondary,
  Primary,
};
