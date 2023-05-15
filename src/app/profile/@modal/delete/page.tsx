"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";

import { deleteFormSchema, IDeleteFormSchema } from "./schema";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";
import { Form } from "../../../../components/Form";

const DelteAccountModal = () => {
  const deleteFormMethods = useForm<IDeleteFormSchema>({
    resolver: zodResolver(deleteFormSchema),
  });
  const { handleSubmit } = deleteFormMethods;
  const { back } = useRouter();

  const handleDelete = (payload: IDeleteFormSchema) => {
    console.log(payload);
  };

  return (
    <Modal.Wrapper>
      <Modal.Title>Deletar conta</Modal.Title>
      <Modal.Message>
        Para sua segurança, é necessário informar sua senha para prosseguir.
      </Modal.Message>

      <Form.Wrapper
        formMethods={deleteFormMethods}
        onSubmit={handleSubmit(handleDelete)}
        className="space-y-8"
      >
        <Form.Field>
          <Form.Label htmlFor="password">Senha</Form.Label>
          <Form.Input name="password" type="password" />
          <Form.Erro field="password" />
        </Form.Field>
        <Modal.Actions>
          <Button.Secondary fullWidth type="button" onClick={back}>
            Cancelar
          </Button.Secondary>
          <Button.Danger fullWidth type="submit">
            Deletar conta
          </Button.Danger>
        </Modal.Actions>
      </Form.Wrapper>
    </Modal.Wrapper>
  );
};

export default DelteAccountModal;
