import { Primary } from "./Primary";

export interface ButtonProps {
  loading?: boolean;
  disabled?: boolean;
  children: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export const Button = {
  Primary,
};
