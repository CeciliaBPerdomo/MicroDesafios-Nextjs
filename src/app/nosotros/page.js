import Image from "next/image";

export default function Nosotros() {
    return (
        <main className="container m-auto">
            <div className="flex justify-center mt-6">
                <Image
                    className="rounded-lg"
                    src={"/cocina.jpg"}
                    alt={"Cocinando con amor"}
                    width={400}
                    height={400}
                />
            </div>

            <br />

            <div className="mr-6 ml-6">
                <p className="text-lg mb-4">Bienvenidos a <b className="text-red-600">Electrodomésticos Capellari</b>, una tradición
                    familiar que perdura desde 1843. Nos enorgullece ser una empresa dedicada a brindar
                    soluciones en electrodomésticos con un compromiso inquebrantable con la calidad, la
                    confianza y el servicio excepcional.
                </p>

                <p className="text-lg mb-4"><b>Nuestra Historia</b>: Desde nuestros humildes comienzos en 1843,
                    hemos sido testigos de la evolución de la industria de electrodomésticos y nos hemos adaptado
                    para satisfacer las cambiantes necesidades de nuestros clientes. A lo largo de las generaciones,
                    hemos construido una reputación sólida basada en la integridad y la dedicación a ofrecer
                    productos de alta calidad.
                </p>

                <p className="mb-4"><b>Valores Fundamentales</b>: En Electrodomésticos Capellari, valoramos la importancia de la
                    familia y la comunidad. Nos esforzamos por construir relaciones a largo plazo con nuestros clientes,
                    tratándolos como miembros extendidos de nuestra propia familia. La transparencia, la honestidad y la
                    ética son los pilares que sustentan cada interacción y transacción.
                </p>

                <p className="mb-4"><b>Selección Excepcional</b>: Explora nuestro extenso catálogo de electrodomésticos de las
                    marcas más confiables del mercado. Desde las innovadoras tecnologías hasta los diseños clásicos,
                    ofrecemos una selección que combina funcionalidad y estilo para satisfacer todos los gustos y necesidades.
                </p>

                <p className="mb-4"><b>Compromiso con la Calidad</b>: En Electrodomésticos Capellari, entendemos que los electrodomésticos
                    son inversiones importantes para tu hogar. Es por eso que seleccionamos cuidadosamente cada producto,
                    asegurándonos de ofrecer solo lo mejor en términos de durabilidad, rendimiento y eficiencia.
                </p>

                <p className="mb-4"><b>Servicio Personalizado</b>: Nuestro equipo altamente capacitado y amable está aquí para
                    ayudarte en cada paso del camino. Desde la elección del producto adecuado hasta la entrega e
                    instalación, nos comprometemos a brindar un servicio personalizado que te haga sentir seguro en tu
                    elección.
                </p>

                <p className="mb-4"><b>Un Futuro Sostenible</b>: Nos preocupamos por el medio ambiente y trabajamos constantemente
                    para integrar prácticas sostenibles en nuestro negocio. Desde opciones energéticamente eficientes
                    hasta programas de reciclaje, buscamos ser una empresa responsable y comprometida con la
                    preservación del planeta.
                </p>

                <p className="mb-4"><b>Únete a Nuestra Familia</b>: Ya sea que estés buscando renovar tu hogar con lo último en
                    tecnología o simplemente necesitas un electrodoméstico confiable, en Electrodomésticos Capellari
                    te damos la bienvenida a nuestra familia. Descubre cómo hemos mantenido la excelencia desde 1843 y
                    sigue siendo tu socio de confianza en el fascinante mundo de los electrodomésticos.
                </p>
            </div>
        </main>
    );
}
