import Link from "next/link";
import React from "react";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";

const CreatedAccountModal = () => {
  return (
    <Modal.Wrapper>
      <Modal.Title>É isso aí</Modal.Title>
      <Modal.Message>Conta criada com sucesso</Modal.Message>
      <Modal.Actions>
        <Link href="/login" className="block w-full">
          <Button.Primary fullWidth>Fazer login</Button.Primary>
        </Link>
      </Modal.Actions>
    </Modal.Wrapper>
  );
};

export default CreatedAccountModal;
