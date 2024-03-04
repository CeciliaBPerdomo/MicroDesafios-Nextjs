import ProductsList from "@/Components/productos/productList";

export default function Home() {
  return (
    <main className="container m-auto">
        <h1 className="text-2xl text-bold ml-6 mb-6 border-b pb-2">Nuestros productos ⭐ destacados:</h1>
        
        <ProductsList categoria={"notebook"} />
        <br />
        <ProductsList categoria={"mouse"} />
    </main>
  );
}
