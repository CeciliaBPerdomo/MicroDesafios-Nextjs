import ProductDetail from "@/Components/productos/ProductDetail"

function DetalleProductos({params}) {
    const {slug} = params
  return (
    <div>
        <ProductDetail slug={slug}/>
    </div>
  )
}

export default DetalleProductos