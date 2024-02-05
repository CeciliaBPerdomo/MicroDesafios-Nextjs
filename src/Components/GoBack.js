"use client"
import { useRouter } from "next/navigation"

const GoBack = ({...args}) => {
    const router = useRouter()

    return (
        <button 
        className="rounded-xl py-2 px-3 bg-red-400 text-center text-white"
        onClick={() => router.back()} {...args}
        >
            ⬅️ Volver
        </button>
    )
}

export default GoBack