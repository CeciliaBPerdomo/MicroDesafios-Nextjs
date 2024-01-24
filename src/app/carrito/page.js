import Boton from "@/Components/Boton"

const Carrito = () => {
    return (
        <>
            <div className="container m-auto">
                <h1 className="text-2xl text-bold">Finaliza tu compra</h1>
                <hr />

                <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                    <label htmlFor="card-no" className="mt-4 mb-2 block text-sm font-medium">Número de tarjeta de crédito</label>
                    <div className="flex">
                        <div className="relative w-7/12 flex-shrink-0">
                            <input type="text" id="card-no" name="card-no" className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                </svg>
                            </div>
                        </div>
                        <input type="text" name="credit-expiry" className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/AA" />
                        <input type="text" name="credit-cvc" className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
                    </div>
                    <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Dirección de envío</label>
                    <div className="flex flex-col sm:flex-row">
                        <div className="relative flex-shrink-0 sm:w-7/12">
                            <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Dirección" />
                            <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <img className="h-4 w-4 object-contain" src="https://emojitool.com/img/twitter/twemoji-13.0.1/flag-uruguay-3290.png" alt="" />
                            </div>
                        </div>
                        <select type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                            <option value="State">Departamento</option>
                        </select>
                        <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Código postal" />
                    </div>

                    {/* <!-- Total --> */}

                    <div className="mt-8 border-t border-b py-2">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Sub-Total</p>
                            <p className="font-semibold text-gray-900">$399.00</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">Envío</p>
                            <p className="font-semibold text-gray-900">$8.00</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between border py-2 px-4">
                        <p className="text-2xl font-medium text-red-600">Total</p>
                        <p className="text-2xl font-semibold text-red-600">$408.00</p>
                    </div>
                </div>
                <div className="mt-8 grid justify-items-end">
                <Boton>Finalizar compra</Boton>
                </div>
            </div>
        </>
    )
}
export default Carrito