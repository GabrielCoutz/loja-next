import { z } from "zod";

const minPasswordLength = 6;

export const deleteFormSchema = z.object({
  password: z
    .string()
    .min(
      minPasswordLength,
      `A senha precisa ter no mínimo ${minPasswordLength} caracteres`
    ),
});

export type IDeleteFormSchema = z.infer<typeof deleteFormSchema>;
