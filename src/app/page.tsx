import Link from "next/link";

import { Card } from "./components/Card";
import { IProductList } from "./interfaces/product";

export default async function Page() {
  const { products }: Record<"products", IProductList> = await (
    await fetch(`${process.env.API_URL}/products`)
  ).json();

  return (
    <>
      <div className="px-4">
        <h1 className="text-center max-md:text-4xl text-6xl text-slate-800 font-bold">
          Bem vindo(a)!
        </h1>
        <span className="block text-center  max-md:text-xl text-2xl text-slate-600 font-regular mt-2">
          Olha só o que da pra fazer com o Next 13.4
        </span>
      </div>
      <Card.List>
        {products.map((product) => (
          <li
            key={product.id}
            className="p-2 w-1/4 max-lg:w-2/4 max-w-md inline-block"
          >
            <Link href="">
              <Card.Wrapper>
                <Card.Image alt={product.title} src={product.thumbnail} />
                <Card.Title>{product.title}</Card.Title>
                <Card.Price>{product.price}</Card.Price>
              </Card.Wrapper>
            </Link>
          </li>
        ))}
      </Card.List>
    </>
  );
}
