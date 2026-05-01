import React from "react";
import FondoNaranja from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Patrones/Patrones_naranja.jpg";
import Lazo from "../../assets/images/Programs/Lazo.png";
import { ArrowUpRight } from "lucide-react";

function ProgramTEA() {
    return (
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
                                    <p className="text-4xl font-bold text-white leading-relaxed whitespace-pre-line">
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
                        <div className="w-[30%] relative overflow-visible">
                            <img
                                src={Lazo}
                                alt="Imagen de apoyo"
                                className="absolute -top-80 -left-70 w-[175%] max-w-none"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgramTEA;
