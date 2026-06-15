import React from "react";
import FondoNaranja from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Patrones/Patrones_naranja.jpg";
import Lazo from "../../assets/images/Programs/Lazo.png";
import { ArrowUpRight } from "lucide-react";
import foto1 from "../../assets/images/AboutUs/Foto1.png";

/*Las fotos que se encuentran en las tablas no estan adecuadas 
a los programas, queda pendiente de cambio */

function ProgramTEA() {
    return (
        <>
            <section className="program-tea">
                <div className="relative w-full p-20 overflow-visible">

                    {/* Fondo */}
                    <div className="absolute inset-0 p-20">
                        <img
                            src={FondoNaranja}
                            className="w-full h-full object-cover rounded-4xl"
                            alt="Fondo naranja"
                        />
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10 m-5">
                        <div className="flex flex-row items-center">
                            {/* Texto */}
                            <div className="w-[70%] flex flex-col gap-10 pl-20 my-10">
                                <div>
                                    <div>
                                        <p className="sm:text-3xl font-bold text-white leading-relaxed whitespace-pre-line">
                                            {`Programa de Apoyo para 
                                        Niños con TEA`}
                                        </p>
                                    </div>

                                    <p className="text-xl text-white leading-relaxed mt-4 whitespace-pre-line">
                                        {`Acompañamos a niños con Trastorno del
                                Espectro Autista mediante programas
                                personalizados y terapias especializadas,
                                en un entorno inclusivo, seguro y lleno de respeto.`}
                                    </p>
                                </div>

                                {/* Este botón no esta en funcionamiento hasta que se agregue la pagina de mas informacion
                            mientras tanto, solo es un elemento visual */}
                                <div className="bg-white w-fit px-8 py-3 rounded-xl flex flex-row gap-3 justify-center items-center">
                                    <p className="text-amber-600 text-xl font-semibold">
                                        Saber más
                                    </p>
                                    <ArrowUpRight className="text-amber-600" />
                                </div>
                            </div>

                            {/* Lazo */}
                            <div className="min-w-[30%] relative overflow-visible">
                                <img
                                    src={Lazo}
                                    alt="Imagen de apoyo"
                                    className="absolute -top-80 -left-70 w-[175%] max-w-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seccion de programas Educativos */}
                <section classname="flex mt-5 justify-center items-center">
                    {/* Pastilla Titular */}
                    <div className="flex flex-col items-center gap-10 mb-16">
                        <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(237, 28, 36, 0.1)' }}>
                            <span className="text-[#ED1C24] font-Poppins">Programas Educativos</span>
                        </div>
                        <h1 className="sm:text-3xl font-bold text-center text-[#54697A]">
                            Programas diseñados para cada etapa
                        </h1>
                    </div>

                    {/* Contenido de los programas educativos */}
                    <div className="flex flex-col gap-10 justify-center items-center">
                        {/*Aqui va la primera fila */}
                        <div className="flex flex-row gap-10 justify-center items-center mb-10">
                            {/* Cartas de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="sm:text-3xl font-medium text-[#85B947]">
                                                    Infante
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(133, 185, 71, 0.2)' }}>
                                                    <span className="text-[#85B947] font-Poppins">3 a 11 Meses</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Estimulación temprana enfocada en el desarrollo sensorial, motor y emocional, en un entorno seguro y afectuoso.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Aqui van las otras dos cartas de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="lg:text-3xl font-medium text-[#CBA40A]">
                                                    Maternal
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(255, 204, 0, 0.1)' }}>
                                                    <span className="text-[#CBA40A] font-Poppins">1 a 2 Años</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Actividades lúdicas que fortalecen la autonomía, el lenguaje inicial y la socialización temprana.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Aqui va la tercera carta de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="sm:text-3xl font-medium text-[#3FA9F5]">
                                                    Parvulo
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(63, 169, 245, 0.1)' }}>
                                                    <span className="text-[#3FA9F5] font-Poppins">2 a 3 Años</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Aprendizaje a través del juego, fomentando habilidades motoras, cognitivas y la interacción con otros niños.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*Segunda fila */}
                    <div className="flex flex-col gap-10 justify-center items-center">
                        {/*Aqui va la primera fila */}
                        <div className="flex flex-row gap-10 justify-center items-center mb-10">
                            {/* Cartas de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="sm:text-3xl font-medium text-[#FD7B03]">
                                                    Pre-Kínder
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center py-2" style={{ backgroundColor: 'rgba(253, 123, 3, 0.2)' }}>
                                                    <span className="text-[#FD7B03] font-Poppins">3 a 4 Años</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Estimulación temprana enfocada en el desarrollo sensorial, motor y emocional, en un entorno seguro y afectuoso.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Aqui van las otras dos cartas de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="sm:text-3xl font-medium text-[#ED1C24]">
                                                    Kínder
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(237, 28, 36, 0.1)' }}>
                                                    <span className="text-[#ED1C24] font-Poppins">4 a 5 Años</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Actividades lúdicas que fortalecen la autonomía, el lenguaje inicial y la socialización temprana.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Aqui va la tercera carta de la primera fila */}
                            <div className="w-[20%] h-fit rounded-2xl" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                <div className="flex flex-row items-center justify-center">
                                    <div className="flex flex-col gap-5 m-5">
                                        <div className="rounded-4xl overflow-hidden">
                                            <img src={foto1} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="flex flex-row items-center justify-between">
                                                <h2 className="sm:text-3xl font-medium text-[#54697A]">
                                                    Preprimario
                                                </h2>
                                                <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(174, 183, 191, 0.1)' }}>
                                                    <span className="text-[#54697A] font-Poppins">5 a 6 Años</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[#54697A] mt-3 text-lg">
                                            Aprendizaje a través del juego, fomentando habilidades motoras, cognitivas y la interacción con otros niños.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section >
        </>
    );
}

export default ProgramTEA;
