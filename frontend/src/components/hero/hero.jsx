import { Sparkles } from "lucide-react";
import logo from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Logo/Principal/PNG/LogoPrincipalColor.png";
import React from "react";

function Hero() {
    return (
        <section class="hero">
            <div className="relative h-screen pt-20 bg-gradient-to-b from-[#F0E8C9] via-[#F0E8C9] to-[#F2C79F]">
                {/* Contenido principal */}
                <div className="flex flex-col gap-6 ml-20 mt-10">
                    {/* Badge */}
                    <div className="w-fit bg-gradient-to-r from-[#ED1C24] to-[#FD7B03] rounded-full flex items-center px-4 py-2">
                        <Sparkles color="#ffffff" className="w-5 h-5 mr-2" />
                        <span className="text-white font-Poppins">Centro de Estimulación Temprana</span>
                    </div>

                    {/* Título */}
                    <h1 className="text-5xl font-bold">
                        <span className="text-[#FFCC00]">Crea</span>{" "}
                        <span className="text-[#85B947]">Juega</span>{" "}
                        <span className="text-[#3FA9F5]">Aprende</span>
                    </h1>

                    {/* Descripción */}
                    <p className="text-xl text-[#54697A] max-w-2xl leading-relaxed">
                        Un entorno inclusivo y enriquecedor donde cada niño
                        encuentra el apoyo necesario para desarrollar su máximo
                        potencial a través de programas personalizados y
                        enfoques terapéuticos avanzados.
                    </p>
                </div>

                {/* Logo flotante */}
                <div className="absolute top-20 right-20 w-1/3 h-auto">
                    <img src={logo} alt="Coloreando Sueños" className="w-full h-auto object-contain" />
                </div>

                {/* Barra de colores */}

                <div className="absolute bottom-0 left-0 right-0 flex">
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#ED1C24]"></div>
                        <div className="w-full bg-[#ED1C24]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#FD7B03]"></div>
                        <div className="w-full bg-[#FD7B03]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#FFCC00]"></div>
                        <div className="w-full bg-[#FFCC00]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#85B947]"></div>
                        <div className="w-full bg-[#85B947]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#3FA9F5]"></div>
                        <div className="w-full bg-[#3FA9F5]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#ED1C24]"></div>
                        <div className="w-full bg-[#ED1C24]"></div>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                        <div className="w-full aspect-square rounded-t-full bg-[#FD7B03]"></div>
                        <div className="w-full bg-[#FD7B03]"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;