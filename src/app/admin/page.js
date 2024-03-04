import ProductsTable from "@/Components/admin/ProductsTable"
import Boton from "@/Components/Boton"
import Link from "next/link"
import LogoutButton from "@/Components/admin/LogoutButton"

const Admin = () => {
    return (
        <div className="container m-auto mt-6">

            <div className="grid grid-cols-4 gap-4 border-b mb-6">
                <h2 className="text-2xl pb-4 text-red-600 align-top">Panel de administración</h2>
                <div className="col-start-5" >
                    <LogoutButton />
                </div>
            </div>

            <div className="mb-6 grid grid-cols-6 pb-2 border-b mb-4">
                <Link href="/admin/create">
                    <Boton>Agregar nuevo producto</Boton>
                </Link>

                <Link href="/orders">
                <Boton>Ver órdenes de compra</Boton>
                </Link>
            </div>

            <p className="text-2xl pb-4 text-red-600 align-top">Productos:</p>
            <ProductsTable />
        </div>
    )
}

export default Admin