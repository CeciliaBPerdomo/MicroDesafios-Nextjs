import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-red-100 border-t border-red-600 mt-10">
                <div className='container m-auto py-2 text-sm text-black flex justify-between items-center'>
                    <p className='ml-8'>
                        Desarrollado con ❤️ por <b>
                            <Link href="https://www.linkedin.com/in/cecilia-perdomo/">
                                Cecilia Perdomo
                            </Link>
                        </b>
                    </p>

                    <div className='flex items-center gap-2 mr-4'>
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