import Image from "next/image";
import React from "react";
import { ProductModal } from "../../../../../../components/ProductModal";
import { IProduct } from "../../../../../../services/api/product/interface";

interface ModalProps {
  params: {
    id: string;
    index: string;
  };
}

const Modal = async ({ params }: ModalProps) => {
  const product: IProduct = await (
    await fetch(`${process.env.PRODUCTS_API_URL}/products/${params.id}`)
  ).json();

  return (
    <ProductModal>
      <Image
        alt={product.title}
        src={product.images[+params.index]}
        width={700}
        height={700}
        className="rounded bg-gray-300"
      />
    </ProductModal>
  );
};

export default Modal;
