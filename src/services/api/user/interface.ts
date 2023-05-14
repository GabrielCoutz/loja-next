export interface IUser {
  email: string;
  id: string;
  name: string;
}

export interface ICreateUserPayload {
  email: string;
  name: string;
  password: string;
}

export type ICreateUserSuccessResponse = IUser;

export interface ICreateUserFailResponse {
  message: string;
}

export type ICreateUserResponse =
  | ICreateUserSuccessResponse
  | ICreateUserFailResponse;
