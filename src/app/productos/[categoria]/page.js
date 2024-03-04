import ProductsList from "@/Components/productos/productList"
import CategoriesMenu from "@/Components/productos/CategoriesMenu"
import { Suspense } from "react"

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Productos - ${params.categoria}`
    }

}

export function generateStaticParams() {
    return [
        {categoria: "todos"}, 
        {categoria: "tvs"}, 
        {categoria: "notebook"}, 
        {categoria: "monitores"}, 
        {categoria: "mouse"}, 
    ]   
}

export const revalidate = 3600

const Productos = ({ params }) => {
    const { categoria } = params
    return (
        <>
            <div className="container m-auto">
                <h1 className="text-2xl text-bold ml-8 border-b pb-2 mb-6">📋 Nuestros productos:</h1>

                <div className="flex gap-10">
                    <CategoriesMenu />

                    <Suspense fallback={<div>
                        <h1 className="text-2xl">Cargando...</h1>
                    </div>
                    }>
                        <ProductsList categoria={categoria} />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default Productos