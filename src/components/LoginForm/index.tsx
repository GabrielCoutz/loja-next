"use client";

import { useForm } from "react-hook-form";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { IloginSchema, loginSchema } from "./schema";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { loginUser } from "../../services/api/auth";
import { Ui } from "../../components/UI";
import { useFetch } from "../../hooks/useFetch";

export const LoginForm = () => {
  const loginFormMethods = useForm<IloginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { error, loading, send } = useFetch(loginUser);
  const { handleSubmit } = loginFormMethods;

  const handleLogin = async (payload: IloginSchema) => {
    const result = await send(payload);
    if (result) console.log(result);
  };

  return (
    <Form.Wrapper
      onSubmit={handleSubmit(handleLogin)}
      formMethods={loginFormMethods}
    >
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
