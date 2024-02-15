"use client"

import { useState } from "react"
import Boton from "../Boton"
import { useAuthContext } from "../Context/AuthContext"

const LoginForm = () => {
    const { registerUser, loginUser } = useAuthContext()
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        // Va a aparecer como un modal
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-red-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2 className="text-xl text-red-600">Iniciar sesión</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Tu password"
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="password"
                    onChange={handleChange}
                />

                <div className="columns-4">
                    <Boton
                        onClick={() => loginUser(values)}
                    >
                        Loguearse
                    </Boton>
                    <Boton onClick={() => registerUser(values)}>Registrarme</Boton>
                </div>

            </form>
        </div>
    )
}

export default LoginForm