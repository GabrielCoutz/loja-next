"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";

import { ISignupUserSchema, signupUserSchema } from "./schema";
import { createUser } from "../../services/api/user";
import { Button } from "../../components/Button";
import { useFetch } from "../../hooks/useFetch";
import { Form } from "../../components/Form";
import { Ui } from "../../components/UI";

export const SignupForm = () => {
  const signupFormMethods = useForm<ISignupUserSchema>({
    resolver: zodResolver(signupUserSchema),
  });
  const { error, loading, send } = useFetch(createUser);
  const { handleSubmit } = signupFormMethods;
  const { push } = useRouter();

  const handleSignup = async (payload: ISignupUserSchema) => {
    const result = await send(payload);

    if (result) push("/signup/success");
  };

  return (
    <Form.Wrapper
      onSubmit={handleSubmit(handleSignup)}
      formMethods={signupFormMethods}
    >
      <Form.Field>
        <Form.Label htmlFor="name">Nome</Form.Label>
        <Form.Input type="name" name="name" />
        <Form.Erro field="name" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="email">Email</Form.Label>
        <Form.Input type="email" name="email" />
        <Form.Erro field="email" />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="password">Senha</Form.Label>
        <Form.Input type="password" name="password" />
        <Form.Erro field="password" />
      </Form.Field>

      <Ui.Message>{error}</Ui.Message>
      <Button.Primary loading={loading} disabled={loading}>
        Enviar
      </Button.Primary>
    </Form.Wrapper>
  );
};
