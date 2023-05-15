import { ICreateUserPayload, ICreateUserResponse, IUser } from "./interface";

export const createUser = async (
  payload: ICreateUserPayload
): Promise<ICreateUserResponse> => {
  const result = await (
    await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
  ).json();

  return result;
};

export const getUser = async (id: string): Promise<IUser> => {
  const result = await (
    await fetch(`http://localhost:3001/api/user/${id}`)
  ).json();

  return result;
};
