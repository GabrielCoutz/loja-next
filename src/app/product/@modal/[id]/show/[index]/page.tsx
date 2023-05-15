import Image from "next/image";
import React from "react";
import { Modal } from "../../../../../../components/Modal";
import { IProduct } from "../../../../../../services/api/product/interface";

interface ModalProps {
  params: {
    id: string;
    index: string;
  };
}

const ProductModal = async ({ params }: ModalProps) => {
  const product: IProduct = await (
    await fetch(`${process.env.PRODUCTS_API_URL}/products/${params.id}`)
  ).json();

  return (
    <Modal>
      <Image
        alt={product.title}
        src={product.images[+params.index]}
        width={700}
        height={700}
        className="rounded bg-gray-300"
      />
    </Modal>
  );
};

export default ProductModal;
