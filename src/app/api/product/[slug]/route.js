import { NextResponse } from "next/server";
import { mockData } from "@/Components/data/productos";

const sleep = (timer) => {
    return new Promise((resolve) => setTimeout(resolve, timer))
}

export async function GET(_, {params}) {
    const {slug} = params
    const data = mockData.find(product => product.slug === slug)
    
    await sleep(1000) // simula una carga asincronica
    return NextResponse.json(data)
}