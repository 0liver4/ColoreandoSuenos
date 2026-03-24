import { Star } from "lucide-react";
import Logo from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Patrones/Patrones_gris.jpg";
import React from "react";
import { RiGraduationCapLine } from "react-icons/ri";
import { IoIosFootball } from "react-icons/io";
import foto1 from "../../assets/images/OurServices/ColoreandoSueños1.png";
import foto2 from "../../assets/images/OurServices/ColoreandoSueños2.png";
import foto3 from "../../assets/images/OurServices/ColoreandoSueños3.jpg";
import foto4 from "../../assets/images/OurServices/ColoreandoSueños4.jpg";

function OurServices() {
    return (
        <div className="relative min-h-screen">
            {/* Imagen de fondo con transparencia */}
            <div
                style={{ backgroundImage: `url(${Logo})` }}
                className="absolute inset-0 bg-cover bg-center opacity-30"
            />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center pt-20 px-4 pb-20">
                {/* Pastilla Titular */}
                <div className="flex flex-col items-center gap-10 mb-16">
                    <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(63, 169, 245, 0.1)' }}>
                        <span className="text-[#3FA9F5] font-Poppins">Centro de Estimulación Temprana</span>
                    </div>
                    <h1 className="text-4xl font-bold text-center text-[#54697A]">
                        Todo lo que tu hijo necesita en un solo lugar
                    </h1>
                </div>

                {/* Grid de Cards */}
                <div className="w-full max-w-7xl space-y-7">
                    {/* Fila Superior - 2 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                        {/* Card Preescolar - imagen izquierda */}
                        <div className="h-96 relative bg-gradient-to-br from-[#3FA9F5] to-blue-500 rounded-tl-[83px] rounded-tr-[100px] rounded-bl-[100px] shadow-lg overflow-hidden">
                            <div className="flex flex-row h-full items-center gap-6 pr-8 py-8 pl-8">
                                <div className="flex-shrink-0 h-full overflow-hidden rounded-tl-[75px] rounded-bl-[75px]">
                                    <img src={foto1} className="w-62 h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 mb-3">
                                        <RiGraduationCapLine className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold font-Poppins mb-2">Preescolar</h3>
                                    <p className="text-white text-base font-medium font-Poppins leading-6">
                                        Educación inicial de calidad con metodologías innovadoras que fomentan el aprendizaje activo y creativo.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card Guardería - imagen derecha */}
                        <div className="h-96 relative bg-gradient-to-br from-[#85B947] to-lime-700 rounded-tl-[83px] rounded-tr-[100px] rounded-br-[100px] shadow-lg overflow-hidden">
                            <div className="flex flex-row h-full items-center gap-6 pl-8 py-8 pr-8">
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 mb-3">
                                        <Star className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold font-Poppins mb-2">Guardería</h3>
                                    <p className="text-white text-base font-medium font-Poppins leading-6">
                                        Servicio de guardería seguro y afectuoso, enfocado en el cuidado personalizado y el desarrollo emocional y social de cada niño.
                                    </p>
                                </div>
                                <div className="flex-shrink-0 h-full overflow-hidden rounded-tr-[75px] rounded-br-[75px]">
                                    <img src={foto2} className="w-62 h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fila Inferior - 2 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                        {/* Card Estimulación Temprana - imagen izquierda */}
                        <div className="h-96 relative bg-gradient-to-br from-[#FFCC00] to-amber-500 rounded-tl-[100px] rounded-br-[100px] rounded-bl-[100px] shadow-lg overflow-hidden">
                            <div className="flex flex-row h-full items-center gap-6 pr-8 py-8 pl-8">
                                <div className="flex-shrink-0 h-full overflow-hidden rounded-tl-[75px] rounded-bl-[75px]">
                                    <img src={foto3} className="w-62 h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 mb-3">
                                        <IoIosFootball className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold font-Poppins mb-2">Estimulación Temprana</h3>
                                    <p className="text-white text-base font-medium font-Poppins leading-6">
                                        Nuestro programa de estimulación temprana fortalece el desarrollo cognitivo, motor y emocional desde los primeros años, respetando el ritmo de cada niño.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card Terapias Especializadas - imagen derecha */}
                        <div className="h-96 relative bg-gradient-to-br from-[#ED1C24] to-red-600 rounded-tr-[100px] rounded-bl-[100px] rounded-br-[100px] shadow-lg overflow-hidden">
                            <div className="flex flex-row h-full items-center gap-6 pl-8 py-8 pr-8">
                                <div className="flex flex-col">
                                    <div className="w-12 h-12 mb-3">
                                        <Star className="w-12 h-12 text-white" />
                                    </div>
                                    <h3 className="text-white text-2xl font-semibold font-Poppins mb-2">Terapias Especializadas</h3>
                                    <p className="text-white text-base font-medium font-Poppins leading-6">
                                        Brindamos terapias especializadas con atención personalizada, apoyando el desarrollo integral de cada niño en un ambiente inclusivo y profesional.
                                    </p>
                                </div>
                                <div className="flex-shrink-0 h-full overflow-hidden rounded-tr-[75px] rounded-br-[75px]">
                                    <img src={foto4} className="w-62 h-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;