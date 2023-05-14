import { ILoginPayload, ILoginResponse } from "./interface";

export const loginUser = async (
  payload: ILoginPayload
): Promise<ILoginResponse> => {
  const result = await (
    await fetch("/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
  ).json();

  return result;
};
