"use client"

import React from 'react'
import Boton from '@/Components/Boton'
import { useRouter } from "next/navigation"

const Thanks = () => {
    const router = useRouter()
    return (
        <div className='container m-auto mr-6'>
            <h2 className='text-2xl text-red-600'>
                Gracias por tu preferencia!
            </h2>
            <h2 className='text-xl mb-6'>
                A la brevedad nos comunicaremos contigo!
            </h2>

            <Boton onClick={() => router.push("/")}>
                Volver a la página principal
            </Boton>
        </div>
    )
}

export default Thanks