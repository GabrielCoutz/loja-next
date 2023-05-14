import { IProduct, IProductList } from "./interface";

const customFetch = (url: string) => {
  return fetch(url, {
    next: {
      revalidate: 30,
    },
  });
};

export const getProducts = async (): Promise<IProductList> => {
  const { products }: Record<"products", IProductList> = await (
    await customFetch(`${process.env.PRODUCTS_API_URL}/products`)
  ).json();

  return products;
};

export const getSingleProduct = async (id: string): Promise<IProduct> => {
  const product: IProduct = await (
    await customFetch(`${process.env.PRODUCTS_API_URL}/products/${id}`)
  ).json();

  return product;
};
