import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface IGetParams {
  params: {
    id: string;
  };
}

export async function GET(_: any, { params }: IGetParams) {
  const userId = params.id;

  const response = await fetch(`${process.env.API_BASE_URL}/users/${userId}`);

  if (response.status === 404)
    return NextResponse.json(
      { message: "Usuário não encontrado" },
      { status: 404 }
    );

  const json = await response.json();
  return NextResponse.json(json, { status: 200 });
}

export async function DELETE(_: any, { params }: IGetParams) {
  const userId = params.id;
  const token = cookies().get("token")?.value;

  await fetch(`${process.env.API_BASE_URL}/users/${userId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return NextResponse.json(undefined, { status: 200 });
}
