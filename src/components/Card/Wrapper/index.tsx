import Link from "next/link";
import React from "react";
import { Card } from "..";
import { IProduct } from "../../../services/api/product/interface";
import { Button } from "../../Button";

interface ListProps {
  product: IProduct;
}

export const Wrapper = ({ product }: ListProps) => {
  return (
    <div className="relative">
      <Button.AddToFavorites product={product} />
      <Link href={`/product/${product.id}`} prefetch={false}>
        <Card.Image alt={product.title} src={product.thumbnail} />
        <Card.Title>{product.title}</Card.Title>
        <Card.Price>{product.price}</Card.Price>
      </Link>
    </div>
  );
};
