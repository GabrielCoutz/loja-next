import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { ILoginResponse } from "../../../../services/api/auth/interface";

export async function POST(req: Request) {
  "use server";
  const body = await req.json();
  const cookieStore = cookies();

  const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
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

  cookieStore.set("token", json.token);
  cookieStore.set("userId", json.id);
  return NextResponse.json(json);
}
