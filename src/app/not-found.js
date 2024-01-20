import React from 'react'
import Image from 'next/image'

const NotFound = () => {
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
    </div>
  )
}

export default NotFound