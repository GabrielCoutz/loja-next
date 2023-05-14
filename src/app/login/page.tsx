"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { IloginSchema, loginSchema } from "./schema";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { loginUser } from "../../services/api/auth";
import { Ui } from "../../components/UI";

const Login = () => {
  const loginFormMethods = useForm<IloginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const { handleSubmit } = loginFormMethods;
  const [message, setMessage] = useState("");

  const handleLogin = async (payload: IloginSchema) => {
    setMessage("");

    const result = await loginUser(payload);
    console.log(result);

    if ("message" in result) return setMessage(result.message);

    console.log("deu certo");
  };

  return (
    <>
      <h1>É bom te ver de novo</h1>
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

        <Ui.Message>{message}</Ui.Message>
        <Button.Primary>Enviar</Button.Primary>
      </Form.Wrapper>
    </>
  );
};

export default Login;
