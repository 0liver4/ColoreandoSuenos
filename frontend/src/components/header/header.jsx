import { Instagram, Mail, Search } from "lucide-react";
import { BiSolidMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import logo from "/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Logo/Secundario/PNG/Secundario - Coloreando Sueños_01.png?url";
import React, { useState } from "react";

function Header() {
    const [hover, setHover] = useState(false);

    return (
        <header className="sticky top-0 z-50 after:absolute after:bottom-0 after:left-0 after:w-full after:h-4 after:shadow-[0_8px_10px_-6px_rgba(0,0,0,0.35)] after:pointer-events-none">
            {/* Barra superior */}
            <div className="w-full h-11 bg-[#ED1C24] px-10">
                <div className="h-full flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <BiSolidMap className="text-white text-2xl" />
                            <span className="text-white font-Poppins">Calle D #2, Santo Domingo Este, RD</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BsFillTelephoneFill className="text-white" />
                            <span className="text-white font-Poppins">(829) 909-1840</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-white">
                        <Instagram className="text-2xl cursor-pointer hover:opacity-80 transition-opacity" strokeWidth={3} />
                        <Mail className="text-2xl cursor-pointer hover:opacity-80 transition-opacity" strokeWidth={3} />
                        <FaFacebook className="text-2xl cursor-pointer hover:opacity-80 transition-opacity" />
                    </div>
                </div>
            </div>

            {/* Barra de navegación */}
            <div className="h-24 bg-white flex items-center justify-between px-10">
                {/* Logo */}
                <div className="h-full flex items-center pl-10">
                    <img src={logo} alt="Coloreando Sueños Logo" className="h-full w-auto object-contain p-2" />
                </div>

                {/* Menú */}
                <nav className="flex gap-10 text-[#333333]">
                    <a href="#inicio" className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">
                        Inicio
                    </a>
                    <a href="#sobre-nosotros" className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">
                        Sobre Nosotros
                    </a>
                    <a href="#programas" className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">
                        Programas
                    </a>
                    <a href="#admisiones" className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">
                        Admisiones
                    </a>
                    <a href="#contacto" className="font-Poppins font-medium hover:font-bold hover:text-[#ED1C24] transition-all duration-200">
                        Contacto
                    </a>
                </nav>

                {/* Botón de agendar */}
                <div className="flex items-center gap-5">
                    <Search
                        color="#ED1C24"
                        className="cursor-pointer transition-all duration-200 hover:scale-110"
                        strokeWidth={hover ? 4 : 3}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    />
                    <button className="bg-[#ED1C24] text-white px-6 py-2 rounded-full font-Poppins hover:bg-[#c01a1f] transition-colors">
                        Agendar una visita
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;