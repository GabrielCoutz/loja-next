import { z } from "zod";

const minPasswordLength = 6;

export const signupUserSchema = z.object({
  name: z.string().nonempty("Preencha o nome"),
  email: z.string().email("Email inválido").nonempty(),
  password: z
    .string()
    .min(
      minPasswordLength,
      `A senha precisa ter no mínimo ${minPasswordLength} caracteres`
    ),
});

export type ISignupUserSchema = z.infer<typeof signupUserSchema>;
