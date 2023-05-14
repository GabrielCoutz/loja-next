"use client";

import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Ui } from "../../components/UI";
import { createUser } from "../../services/api/user";
import { ISignupUserSchema, signupUserSchema } from "./schema";
import { useRouter } from "next/navigation";

const Signup = () => {
  const signupFormMethods = useForm<ISignupUserSchema>({
    resolver: zodResolver(signupUserSchema),
  });
  const { handleSubmit } = signupFormMethods;
  const [message, setMessage] = useState("");
  const { push } = useRouter();

  const handleSignup = async (payload: ISignupUserSchema) => {
    setMessage("");

    const result = await createUser(payload);
    if ("message" in result) return setMessage(result.message);
    console.log("deu certo");

    // push("/login");
  };

  return (
    <>
      <h1>Crie sua conta</h1>
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

        <Ui.Message>{message}</Ui.Message>
        <Button.Primary>Enviar</Button.Primary>
      </Form.Wrapper>
    </>
  );
};

export default Signup;
