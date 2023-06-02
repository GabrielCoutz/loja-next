import React from "react";
import { useFavorites } from "../../../hooks/useFavorites";
import { IProduct } from "../../../services/api/product/interface";
import CartIconOutline from "@heroicons/react/24/outline/ShoppingCartIcon";
import CartIconFilled from "@heroicons/react/24/solid/ShoppingCartIcon";

interface AddToFavoritesProps {
  product: IProduct;
}

export const AddToFavorites = ({ product }: AddToFavoritesProps) => {
  const { addToFavorites, isFavorited } = useFavorites();

  return (
    <button
      onClick={() => addToFavorites(product)}
      className="p-2 rounded-full border bg-zinc-100 absolute top-3 right-3"
    >
      {isFavorited(product) ? (
        <CartIconFilled className="w-6 h-6" title="Remover do carrinho" />
      ) : (
        <CartIconOutline className="w-6 h-6" title="Adicionar do carrinho" />
      )}
    </button>
  );
};
