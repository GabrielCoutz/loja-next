import { useState } from "react";

type AnyFunction = (...args: any) => any;
type IResult<T extends AnyFunction> = Awaited<ReturnType<T>>;

export const useFetch = <T extends AnyFunction>(request: T) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const send = async (payload: Parameters<T>[0]) => {
    let result: IResult<T> | null = null;
    setLoading(false);
    setError(null);

    setLoading(true);
    const response = await request(payload);
    setLoading(false);

    if ("message" in response) setError(response.message);
    else result = response;

    return result;
  };

  return {
    error,
    loading,
    send,
  };
};
