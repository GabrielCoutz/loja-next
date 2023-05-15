import Link from "next/link";
import React from "react";
import { Button } from "../../components/Button";
import { getCurrentUser } from "../../helpers/getCurrentUser";

const Profile = async () => {
  const user = await getCurrentUser();

  return (
    <section className="space-y-6 container mx-auto flex flex-col items-center">
      <h1 className="text-center font-semibold text-slate-800 text-2xl">
        Bem vindo, {user.name}
      </h1>
      <span className="block text-center italic">{user.email}</span>
      <Link href="/profile/delete">
        <Button.Danger>Deletar conta</Button.Danger>
      </Link>
    </section>
  );
};

export default Profile;
