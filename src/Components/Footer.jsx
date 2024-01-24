import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <br />
            <footer className="w-full bg-red-100 border-t">
                <div className='container m-auto py-2 text-sm text-black flex justify-between items-center'>
                    <p>Desarrollado por <b>Cecilia Perdomo</b> 💛</p>

                    <div className='flex items-center gap-2'>
                        <p className='text-black'>Powered by</p>
                        <Image
                            src={"/Logo.png"}
                            alt={"Logo"}
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
                <hr />
            </footer>
        </>
    )
}

export default Footer;