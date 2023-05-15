import { z } from "zod";

const minPasswordLength = 6;

export const loginSchema = z.object({
  email: z.string().email("Email inválido").nonempty(),
  password: z
    .string()
    .min(
      minPasswordLength,
      `A senha precisa ter no mínimo ${minPasswordLength} caracteres`
    ),
});

export type IloginSchema = z.infer<typeof loginSchema>;
