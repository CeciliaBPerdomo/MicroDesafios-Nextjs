import ProductsTable from "@/Components/admin/ProductsTable"
import Boton from "@/Components/Boton"

const Admin = () => {
    return (
        <div className="container m-auto mt-6">
            <h2 className="text-2xl my-10 pb-4 text-red-600 border-b">Panel de administración</h2>
            <ProductsTable />
        </div>
    )
}

export default Admin