"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { IloginSchema, loginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (payload: IloginSchema) => {
    console.log(payload);
  };

  return (
    <>
      <h1>É bom te ver de novo</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="mx-auto max-w-sm p-4 shadow rounded-sm space-y-4"
      >
        <div className="flex flex-col gap-x-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email")}
            className="bg-zinc-200 rounded border focus:border-indigo-600"
          />
          {errors.email?.message && (
            <span className="text-red-400 font-medium text-sm">
              {errors.email?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-x-2">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            {...register("password")}
            className="bg-zinc-200 rounded border focus:border-indigo-600"
          />
          {errors.password?.message && (
            <span className="text-red-400 font-medium text-sm">
              {errors.password?.message}
            </span>
          )}
        </div>

        <button className="py-2 px-4 bg-indigo-500 text-white rounded">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login;
