import React from 'react'
import Image from 'next/image';  

function Loading() {
    return (
        <div className='flex justify-center items-center mt-6'>
            <Image
                src={"/Logo.png"}
                alt={"Logo"}
                width={150}
                height={150}
                className="animate-pulse"
            />
        </div>
    )
}

export default Loading