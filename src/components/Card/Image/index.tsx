import Image from "next/image";

interface ImageProps {
  alt: string;
  src: string;
}

export const ProductImage = ({ alt, src }: ImageProps) => {
  return (
    <Image
      alt={alt}
      src={src}
      width={350}
      height={350}
      className={`rounded object-cover bg-gray-300 h-[350px] w-[350px] max-sm:h-[200px] max-sm:w-[200px]`}
    />
  );
};
