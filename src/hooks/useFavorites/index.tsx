"use client";

import { useCallback, useState } from "react";
import { IProduct, IProductList } from "../../services/api/product/interface";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<IProductList>([]);

  const isFavorited = useCallback(
    (product: IProduct) =>
      !!favorites.find((favorite) => favorite.id === product.id),
    [favorites]
  );

  const addToFavorites = useCallback(
    (product: IProduct) => {
      if (!isFavorited(product)) setFavorites((prev) => [...prev, product]);
      else
        setFavorites((prev) =>
          prev.filter((favorite) => favorite.id !== product.id)
        );
    },
    [isFavorited]
  );

  return {
    favorites,
    setFavorites,
    addToFavorites,
    isFavorited,
  };
};
