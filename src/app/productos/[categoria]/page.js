import ProductsList from "@/Components/productos/productList"

const Productos = ({ params }) => {
    const { categoria } = params
    return (
        <>
            <div className="container m-auto">
                <h1 className="text-2xl text-bold">Nuestros productos:</h1>
                <hr />
                <br />
                <div className="flex gap-10">
                    {/* <CategoriesMenu /> */}
                    <ProductsList categoria={categoria} />
                </div>
            </div>
        </>
    )
}

export default Productos