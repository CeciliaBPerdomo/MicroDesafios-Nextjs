"use client"
import Image from 'next/image';                 // Imagenes
import React from 'react';                      // React 
import Link from 'next/link';                   // Link
import { usePathname } from 'next/navigation';  // Links activos

const Navbar = () => {
    const pathname = usePathname()
    const links = [
        {
            label: "Productos",
            href: "/"
        },

        {
            label: "Nosotros",
            href: "/nosotros"
        },

        {
            label: "Contacto",
            href: "/contacto"
        }
    ]

    return (
        <div>
            <header className="w-full py-6 bg-red-200">
                <div className='container m-auto flex justify-between items-center'>
                    <p className='text-4xl text-bold text-slate-100'>
                        <Link href={"/"}>
                            <Image
                                src={"/Logo.png"}
                                alt="Logo"
                                width={100}
                                height={200}
                            />
                            </Link>
                    </p>
                    <nav className='flex justify-between gap-2'>
                        {links.map(link => {
                             return(
                                <Link
                                key = {link.label}
                                href={link.href}
                                // queda en negrita cuando esta activo el link
                                className={`${pathname === link.href ? 'font-bold': ''} text-base p-3`}
                                >
                                    {link.label}
                                </Link>
                             )
                        })}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar;