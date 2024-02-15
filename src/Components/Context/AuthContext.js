"use client"
import { createContext, useContext, useState } from "react"

import { auth } from "@/app/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const registerUser = async (values) => {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)
    
        const user = userCredential.user
        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        })
    
        console.log("Usuario creado correctamente")
    }

    const loginUser = async (values) => {
        const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
        const user = userCredential.user

        setUser({
            logged: true,
            email: user.email,
            uid: user.uid
        })
    }
    

    return (
        <AuthContext.Provider
            value={{
                user,
                registerUser,
                loginUser
            }}>
            {children}
        </AuthContext.Provider>
    )
}
