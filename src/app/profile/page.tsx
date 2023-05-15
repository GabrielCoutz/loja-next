import { cookies } from "next/headers";

import React from "react";
import { getUser } from "../../services/api/user";

const Profile = async () => {
  const userId = cookies().get("userId")?.value!;
  const user = await getUser(userId);

  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};

export default Profile;
