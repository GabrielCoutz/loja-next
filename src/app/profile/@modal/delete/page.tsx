"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import React from "react";

import { getCurrentUser } from "../../../../helpers/getCurrentUser";
import { deleteFormSchema, IDeleteFormSchema } from "./schema";
import { deleteUser } from "../../../../services/api/user";
import { loginUser } from "../../../../services/api/auth";
import { Button } from "../../../../components/Button";
import { useFetch } from "../../../../hooks/useFetch";
import { Modal } from "../../../../components/Modal";
import { Form } from "../../../../components/Form";
import { Ui } from "../../../../components/UI";

const DelteAccountModal = () => {
  const deleteFormMethods = useForm<IDeleteFormSchema>({
    resolver: zodResolver(deleteFormSchema),
  });
  const { handleSubmit } = deleteFormMethods;
  const { back } = useRouter();
  const { error, loading, send } = useFetch(loginUser);

  const handleDelete = async (payload: IDeleteFormSchema) => {
    const user = await getCurrentUser();
    const passwordIsValid = await send({
      email: user.email,
      password: payload.password,
    });

    if (passwordIsValid) await deleteUser(user.id);
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
          <Ui.Message>{error}</Ui.Message>
          <Button.Secondary
            fullWidth
            type="button"
            onClick={back}
            loading={loading}
            disabled={loading}
          >
            Cancelar
          </Button.Secondary>
          <Button.Danger
            fullWidth
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Deletar conta
          </Button.Danger>
        </Modal.Actions>
      </Form.Wrapper>
    </Modal.Wrapper>
  );
};

export default DelteAccountModal;
