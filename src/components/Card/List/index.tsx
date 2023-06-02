"use client";

import React, { useEffect, useState } from "react";
import { Card } from "..";
import { getProducts } from "../../../services/api/product";

import { IProductList } from "../../../services/api/product/interface";

export const List = () => {
  const [products, setProducts] = useState<null | IProductList>(null);

  useEffect(() => {
    (async () => {
      const result = await getProducts();
      setProducts(result);
    })();
  }, []);

  if (products)
    return (
      <ul className="p-4 container mx-auto mt-6">
        {products.map((product) => (
          <li
            key={product.id}
            className="p-2 w-1/4 max-lg:w-2/4 max-w-md inline-block"
          >
            <Card.Wrapper product={product} />
          </li>
        ))}
      </ul>
    );
  return <div>Loading...</div>;
};
