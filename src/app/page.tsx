import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const { products } = await (
    await fetch(`${process.env.API_URL}/products`)
  ).json();

  return (
    <ul className="p-4 container mx-auto">
      {products.map(async (product: any) => (
        <li
          key={product.id}
          className="p-2 w-1/4 max-lg:w-2/4 max-w-md inline-block"
        >
          <Link href="">
            <div className="rounded-md border transition hover:shadow p-4 bg-gray-100">
              <div>
                <Image
                  alt={product.title}
                  src={product.thumbnail}
                  width={350}
                  height={350}
                  className="rounded object-cover h-[350px] w-[350px]"
                />
              </div>
              <h1 className="mb-2 text-zinc-800">{product.title}</h1>
              <span className="mb-4 text-zinc-600">R$ {product.price}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
