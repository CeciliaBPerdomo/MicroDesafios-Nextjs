import Image from "next/image";
import ProductsList from "@/Components/productos/productList";

export default function Home() {
  return (
    <main className="container m-auto">
        <h1 className="text-2xl text-bold">Nuestros productos destacados:</h1>
        <hr />
        <br />

        <ProductsList categoria={"tvs"} />
    </main>
  );
}
