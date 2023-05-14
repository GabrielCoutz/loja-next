import { NextResponse } from "next/server";
import { setCookie } from "nookies";
import { ILoginResponse } from "../../../services/api/auth/interface";

export async function POST(req: Request, ctx: any) {
  const body = await req.json();

  const response = await fetch(`${process.env.USER_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json: ILoginResponse = await response.json();
  if ("message" in json)
    return NextResponse.json(
      { message: "Credenciais inválidas" },
      { status: response.status }
    );

  setCookie(ctx, "token", json.token);
  return NextResponse.json(json);
}
