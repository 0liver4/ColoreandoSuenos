import { Sparkles } from "lucide-react";
import logo from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Logo/Principal/PNG/LogoPrincipalColor.png";
import React from "react";
import foto1 from "../../assets/images/AboutUs/Foto1.png";
import foto2 from "../../assets/images/AboutUs/Foto2.png";
import foto3 from "../../assets/images/AboutUs/Foto3.png";
import foto4 from "../../assets/images/AboutUs/Foto4.png";
import Check from "../../assets/images/AboutUs/Check.webp";


function AboutUs() {
    return (
        <div className="relative min-h-screen pt-10 bg-[#AEB7BF1A]">
            {/* Contenido principal */}
            <div className="flex flex-col gap-6 ml-10 mt-10 pb-16">
                {/*Contenido*/}
                <div className="flex flex-row gap-5">
                    {/*Imagenes*/}
                    <div className="flex justify-center items-start gap-7">
                        <div className="flex flex-col gap-7">
                            <div className="rounded-4xl overflow-hidden w-64 aspect-[3/4]">
                                <img src={foto3} className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-4xl overflow-hidden w-64 aspect-[3/4]">
                                <img src={foto2} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-7 mt-10">
                            <div className="rounded-4xl overflow-hidden w-64 aspect-[3/4]">
                                <img src={foto4} className="w-full h-full object-cover" />
                            </div>
                            <div className=" rounded-4xl overflow-hidden w-64 aspect-[3/4]">
                                <img src={foto1} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                    {/*Contenido textual*/}
                    <div className="flex flex-col gap-10 mr-20 pl-7 gap-7">
                        {/* Badge */}
                        <div className="flex flex-col items-start gap-10 mb-7">
                            <div className="w-fit rounded-full flex items-center px-4 py-2" style={{ backgroundColor: 'rgba(133, 185, 71, 0.2)' }}>
                                <span className="text-[#85B947] font-Poppins">Sobre Nosotros</span>
                            </div>
                        </div>
                        <h1 className="font-Poppins font-medium text-4xl text-[#54697A]">
                            Comprometidos con El <br />Desarrollo integral de cada niño
                        </h1>
                        <div className="flex flex-col gap-9">
                            <p className="text-xl text-[#54697A] max-w-2xl leading-relaxed">
                                En Coloreando Sueños, nos dedicamos a proporcionar un entorno
                                inclusivo y enriquecedor donde cada nino puede desarrollar su
                                maximo potencial. Nuestro equipo de profesionales trabaja con
                                amor y dedicacion para apoyar el crecimiento de los mas
                                pequenos.
                            </p>
                            <p className="text-xl text-[#54697A] max-w-2xl leading-relaxed">
                                Creemos que cada niño es único y merece una atención
                                personalizada que respete su ritmo de aprendizaje y potencie sus
                                fortalezas individuales.
                            </p>
                        </div>
                        <div className="text-[#85B947] text-xl font-semibold flex flex-col gap-7">
                            <div className="flex flex-row items-center gap-4">
                                <img src={Check} className="w-8" />
                                <div className="">Personal altamente capacitado <br />y certificado</div>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <img src={Check} className="w-8" />
                                <div className="">Comunicacion constante con las familias</div>
                            </div>
                            <div className="flex flex-row items-center gap-4">
                                <img src={Check} className="w-8" />
                                <div className="">Ambiente inclusivo y respetuoso</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;