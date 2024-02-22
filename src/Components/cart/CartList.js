"use client"
import CartItem from "./cartItem"
import { useCartContext } from "../Context/CartContext"

const CartList = () => {
    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            <ul>
                {cart.map((item) =>
                    <CartItem
                        item={item}
                        key={item.slug} 
                    />
                )}
            </ul>

            <p className="text-2xl my-4 border-b pb-4 text-right">Total: ${totalPrice()}</p>
        </div>
    )
}

export default CartList