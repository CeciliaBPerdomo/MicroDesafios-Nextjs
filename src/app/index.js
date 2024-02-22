// import Script from "next/script";

// export default function DashboardLayout({ children }) {
//     return (
//         <>
//             <section>
//                 {children}
//             </section>

//             <Script src="https://example.com/script.js" />
//         </>
//     )
// }


// import Image from "next/image"
// import Logo from "../../public/Logo.png"

// export default function Page() {
//     return (
//         <Image 
//             src={Logo}
//             alt="Logo"
//          />
//     )
// }

// import Image from "next/image"
// import Logo from "../../public/Logo.png"

// export default function Page() {
//     return (
//         <Image 
//             src={Logo}
//             alt="Logo"
//             blurDaraURL="data: ..." --> imagen que queremos que se muestra mientras se carga
//             placeholder="blur" --> mientras la imagen se carga
//          />
//     )
// }

// Generacion estatica
// export const metadata = {
//     title: "",
//     description: ""
// }

// export default function Page() {}

// Generacion dinamica
// export async function generateMetadata ({params, searchParams}, parent) {
//     const {id} = params.id
//     const productos = await fetch(`https://localhost:3000/api/product/${id}`).then((res) => res.json())

//     return {
//         title: productos.title,
//         onGraph: {
//             images: ['/imagen', ...previousImages],
//         }
//     }
// }

// export default function Page({parms, searchParams}) {}
