import { NextResponse } from "next/server";

export async function POST(request) {
    const formData = await request.json()

    return NextResponse.json("Data recibida correctamente")
}