"use client"
import { useCartContext } from "@/Components/Context/CartContext"
import CartItem from "@/Components/cart/cartItem"
import Link from "next/link"

const Carrito = () => {
    const { cart } = useCartContext()

    return (
        <div className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">🛒 Tu compra</h2>
            {cart != "" ?
                <ul>
                    {cart.map((item) =>
                        <CartItem item={item} key={item.slug} />
                    )}
                </ul>
                :
               <Link href={"/productos/todos"} className="ml-8 text-2xl text-bold text-red-400">
                Tu carrito de compras está vacío, 💪🏻 comienza a comprar...
                </Link>
            }
            <hr className="mt-6" />
        </div>
    )
}
export default Carrito