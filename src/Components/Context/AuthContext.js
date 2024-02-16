"use client"
import { createContext, useContext, useEffect, useState } from "react"

import { auth } from "@/app/firebase/config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const registerUser = async (values) => {
        await createUserWithEmailAndPassword(auth, values.email, values.password)
        // const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password)

        // const user = userCredential.user
        // setUser({
        //     logged: true,
        //     email: user.email,
        //     uid: user.uid
        // })
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
        // const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
        // const user = userCredential.user

        // setUser({
        //     logged: true,
        //     email: user.email,
        //     uid: user.uid
        // })
    }

    const logOut = async () => {
        await signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log(user)

            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }

        })
    }, [])


    return (
        <AuthContext.Provider
            value={{
                user,
                registerUser,
                loginUser,
                logOut
            }}>
            {children}
        </AuthContext.Provider>
    )
}
