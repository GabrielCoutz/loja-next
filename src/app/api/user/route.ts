import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(`${process.env.USER_API_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (response.status === 409)
    return NextResponse.json(
      { message: "Email já utilizado" },
      { status: 409 }
    );

  const json = await response.json();
  return NextResponse.json(json, { status: 201 });
}
