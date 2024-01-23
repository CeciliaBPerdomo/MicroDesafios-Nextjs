"use client";
import React from 'react'
import Image from 'next/image'
import Boton from "@/Components/Boton";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter()
  return (
    <div>
        <main className="container m-auto">
            <p className='text-4xl text-center py-6'>
                La página no se encuentra disponible
            </p>
            <br />
            <div className='flex justify-center'>
            <Image 
                src={"/not-found.png"}
                alt="Not found"
                width={1000}
                height={1000}
            />
            </div>
        </main>
        <div className="grid justify-items-center">
        <Boton onClick={() => router.back()}>
          Página anterior
        </Boton>
        </div>
        <br/>
    </div>
  )
}

export default NotFound