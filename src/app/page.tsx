"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { getProducts } from "../services/api/product";
import { IProduct, IProductList } from "../services/api/product/interface";

export default function Page() {
  const [products, setProducts] = useState<null | IProductList>(null);
  const [favorites, setFavorites] = useState<IProductList>([]);

  useEffect(() => {
    (async () => {
      const result = await getProducts();
      setProducts(result);
    })();
  }, []);

  const addToFavorites = (item: IProduct) => {
    console.log(favorites);
    const alreadyFavorited = favorites.find(
      (product) => product.id === item.id
    );

    if (!alreadyFavorited) return setFavorites([...favorites, item]);
    setFavorites(favorites.filter((favorite) => favorite.id !== item.id));
  };

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
        {products?.map((product) => (
          <li
            key={product.id}
            className="p-2 w-1/4 max-lg:w-2/4 max-w-md inline-block"
          >
            <button
              onClick={() => addToFavorites(product)}
              className="py-2 px-4 rounded-lg border"
            >
              {!!favorites.find((item) => product === item)
                ? "Desfavoritar"
                : "Favoritar"}
            </button>
            <Link href={`/product/${product.id}`}>
              <Card.Wrapper
                isSelected={!!favorites.find((item) => product === item)}
              >
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
