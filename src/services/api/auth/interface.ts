import { IUser } from "../user/interface";

export interface ILoginPayload extends Pick<IUser, "email"> {
  password: string;
}

export interface ILoginSuccessResponse {
  token: string;
  id: string;
}

export interface ILoginFailResponse {
  message: string;
}

export type ILoginResponse = ILoginSuccessResponse | ILoginFailResponse;
