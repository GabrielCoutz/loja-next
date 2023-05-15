import { cookies } from "next/headers";
import { getUser } from "../../services/api/user";
import { IUser } from "../../services/api/user/interface";

export const getCurrentUser = async (): Promise<IUser> => {
  const userId = cookies().get("userId")?.value!;
  const user = await getUser(userId);

  return user;
};
