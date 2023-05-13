"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { IloginSchema, loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../components/Form";

const Login = () => {
  const loginFormMethods = useForm<IloginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = loginFormMethods;

  const handleLogin = (payload: IloginSchema) => {
    console.log(payload);
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

        <button className="py-2 px-4 bg-indigo-500 text-white rounded">
          Enviar
        </button>
      </Form.Wrapper>
    </>
  );
};

export default Login;
