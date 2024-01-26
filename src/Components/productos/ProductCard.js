import Image from "next/image";
import Link from "next/link"

const ProductCard = ({ item }) => {
    return (
        <article className="basis-72 shadow-lg rounded border" style={{height: 320}}>
            {/* <Link href={`/productos/details/${item.slug}`} className="flex flex-col"> */}
            <div className="flex justify-center align-center" style={{height: 200}}>
                <Image
                    alt={item.title}
                    src={`/productos/${item.image}`}
                    width={240}
                    height={200}
                    style={{ objectFit: "contain" }}
                />
            </div>
                <div className="px-4 border-t border-gray-200" style={{height: 70}}>
                    <h4 className="text-sm my-4 text-center">{item.title}</h4>
                    </div>
                    <div className="px-4 border-t border-gray-200 mt-2"> 
                    <p className="text-2xl font-semibold mb-6 text-end text-red-600">u$s {item.price}</p>
                </div>
            {/* </Link> */}
        </article>
    )
}

export default ProductCard;