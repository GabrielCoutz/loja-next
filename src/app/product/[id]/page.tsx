import Image from "next/image";
import React from "react";
import { BackButton } from "../../../components/BackButton";
import { toCurrency } from "../../../helpers/toCurrency";
import { IProduct } from "../../../interfaces/product";

interface ProductPageParams {
  params: { id: string };
}

const ProductPage = async ({ params }: ProductPageParams) => {
  const product: IProduct = await (
    await fetch(`${process.env.API_URL}/products/${params.id}`)
  ).json();

  return (
    <>
      <div className="p-4">
        <BackButton />
      </div>

      <section className="p-4">
        <h1 className="text-center max-md:text-4xl text-6xl text-slate-800 font-bold">
          {product.title}
        </h1>
        <span className="block text-center max-md:text-xl text-2xl text-slate-700 mt-4 font-medium">
          {toCurrency(product.price)}
        </span>
        <p className="block text-center text-lg text-slate-600 mt-4 max-w-md mx-auto">
          {product.description}
        </p>
        <ul className="flex flex-wrap gap-4 justify-center mt-16">
          {product.images.map((src) => (
            <li
              key={src}
              className="p-2 flex items-center justify-center rounded-lg border-2 transition border-gray-200 hover:border-gray-400"
            >
              <Image
                alt={product.title}
                src={src}
                width={400}
                height={400}
                className="rounded bg-gray-300"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export async function generateMetadata({ params }: ProductPageParams) {
  const { title }: IProduct = await (
    await fetch(`${process.env.API_URL}/products/${params.id}`)
  ).json();

  return {
    title: `Lojinha maneira - ${title}`,
  };
}

export default ProductPage;
