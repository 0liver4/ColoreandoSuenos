import { Instagram, Mail, Search } from "lucide-react";
import { BiSolidMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import logo from "/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Logo/Secundario/PNG/Secundario - Coloreando Sueños_01.png?url";

import React from "react";
import Hero from "../hero/hero";

function Header() {
    const [hover, setHover] = React.useState(false);

    return (
        <header className="relative z-50 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-4 after:shadow-[0_8px_10px_-6px_rgba(0,0,0,0.35)] after:pointer-events-none">
            <div className="h-16 min-h-10 w-full bg-[#ED1C24] sm:px-10">
                <div className="w-full h-full">

                    <div className="h-full flex items-center justify-start sm:px-1 gap-5">
                        <div className="h-full flex items-center justify-start gap-2">
                            <BiSolidMap className="text-white text-2xl" />
                            <h1 className="text-white font-Poppins">Calle D #2, Santo Domingo Este, RD</h1>
                        </div>
                        <div className="h-full flex items-center justify-start gap-2">
                            <BsFillTelephoneFill className="text-white" />
                            <h1 className="text-white font-Poppins">(829) 909-1840</h1>
                        </div>

                        <div className="h-full flex items-center justify-end sm:ml-auto gap-3 text-white">
                            <Instagram className="text-2xl" strokeWidth={3} />
                            <Mail className="text-2xl" strokeWidth={3} />
                            <FaFacebook className="text-2xl" strokeWidth={2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Seccion de logo, menu y agenda */}
            <div className="h-24 bg-white flex items-center gap-5 sm:px-10">
                {/*Logo*/}
                <div className="h-24 flex items-center justify-start sm:pl-10 sm:pr-48">
                    <img src={logo} alt="Logo" className="max-h-full max-w-full object-contain p-2" />
                </div>

                {/*Menu*/}
                <div className="flex flex-row gap-10 text-[#333333] px-2">
                    <h1 className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">Inicio</h1>
                    <h1 className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">Sobre Nosotros</h1>
                    <h1 className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">Programas</h1>
                    <h1 className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">Admisiones</h1>
                    <h1 className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">Contacto</h1>
                </div>


                {/*Agendar cita*/}
                <div className="h-24 flex items-center justify-end sm:ml-auto ">
                    
                    <Search
                        color="rgba(237, 28, 36, 1)"
                        className="sm:mr-5 transition-all duration-200 hover:scale-110"
                        strokeWidth={hover ? 4 : 3}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    />

                    <button className="bg-[#ED1C24] text-white px-4 py-2 rounded-full hover:bg-[#c01a1f] aline-center font-Poppins">
                        Agendar una visita
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;