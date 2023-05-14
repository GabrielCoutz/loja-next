import { ICreateUserPayload, ICreateUserResponse } from "./interface";

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
