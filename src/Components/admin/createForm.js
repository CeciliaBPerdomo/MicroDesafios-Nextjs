"use client"

import { useState } from "react"
import Boton from "../Boton"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, setDoc } from "firebase/firestore"
import { db, storage } from "@/app/firebase/config"

const createProduct = async (values, file) => {
    //  para guardar imagenes
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    })
        .then(() => console.log("Producto agregado exitosamente"))
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        inStock: 0,
        price: 0,
        type: "",
        slug: "",
        file: null
    })

    const handleFileChange = (e) => {
        // Access the selected file
        const selectedFile = e.target.files[0].name;
    
        // Update the state with the selected file
        setValues({
            ...values,
            file: selectedFile
        });

      };
    

    const handleChange = (e) => {
        setValues({
            ...values, //spread
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(values)
        await createProduct(values)
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <h2 className="text-2xl text-red-600 border-b">Ingresar nuevos productos:</h2>
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    required
                    value={values.slug}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    required
                    value={values.title}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imágen: </label>
                <input
                    type="file"
                    required
                  //  value={values.file}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="file"
                    onChange={handleFileChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    required
                    value={values.price}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    required
                    value={values.inStock}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoría: </label>
                <input
                    type="text"
                    required
                    value={values.type}
                    className="p-2 rounded w-full border border-red-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-red-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Guardar producto</Boton>
            </form>
        </div>
    )
}

export default CreateForm