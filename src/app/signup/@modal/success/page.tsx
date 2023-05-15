import Link from "next/link";
import React from "react";
import { Button } from "../../../../components/Button";
import { Modal } from "../../../../components/Modal";

const success = () => {
  return (
    <Modal>
      <div className="max-w-72 w-full rounded bg-white shadow-sm p-4 space-y-2">
        <h1 className="text-lg font-medium text-center text-slate-700">
          É isso aí
        </h1>
        <span className="block text-center text-slate-600">
          Conta criada com sucesso
        </span>
        <Link href="/login" className="block mt-4">
          <Button.Primary fullWidth>Fazer login</Button.Primary>
        </Link>
      </div>
    </Modal>
  );
};

export default success;
