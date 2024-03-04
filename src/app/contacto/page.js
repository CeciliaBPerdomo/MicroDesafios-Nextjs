"use client"
import { useState } from "react"
import Boton from "@/Components/Boton";

const Contacto = () => {
    const [values, setValues] = useState({
        email: "",
        text: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch(`${process.env.API_URL}/api/contacto`, {
            method: "POST",
            body: JSON.stringify(values)
        })
    }

    return (
        <>
            <div className="container m-auto">
                <h1 className="text-2xl text-bold ml-6 border-b pb-2">Contactate con nosotros</h1>

                <form className="my-12 ml-6 mr-6" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-l font-medium leading-6 text-bold">
                        Correo electrónico:
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            onChange={handleChange}
                            type="email"
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <div className="mt-6">
                        <label htmlFor="email" className="block text-l font-medium leading-6 text-bold">
                            Comentarios:
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Comentarios"
                            name="text"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-8 grid justify-items-center">
                        <Boton type="submit">Enviar comentarios 📩</Boton>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Contacto;