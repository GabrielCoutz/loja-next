import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import React, { PropsWithChildren } from "react";

const ProfileLayout = ({ children }: PropsWithChildren) => {
  const userIsLogged = cookies().get("token")?.value;

  if (!userIsLogged) redirect("/login");

  return <>{children}</>;
};

export default ProfileLayout;
