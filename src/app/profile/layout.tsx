import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React, { PropsWithChildren, ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

const ProfileLayout = ({ children, modal }: ProfileLayoutProps) => {
  const userIsLogged = cookies().get("token")?.value;

  if (!userIsLogged) redirect("/login");

  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default ProfileLayout;
