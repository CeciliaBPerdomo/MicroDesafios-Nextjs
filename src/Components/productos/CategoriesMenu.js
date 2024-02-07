"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
    {label: "Todos", href: "/productos/todos"},
    {label: "Tvs", href: "/productos/tvs"},
    {label: "Monitores", href: "/productos/monitor"},
    {label: "Notebooks", href: "/productos/notebook"},
    {label: "Mouse", href: "/productos/mouse"},
]
const CategoriesMenu = () => {
    const pathname = usePathname()   
    
    return (
        <aside className="flex flex-col gap-3 text-red-600">
            {links.map(link => (
                <Link 
                key={link.label}
                href={link.href} 
                className={`${pathname === link.href ? "font-semibold border-b": ""} py-2`}
                >
                    {link.label}
                </Link>
            ))}
        </aside>
    )
}

export default CategoriesMenu;