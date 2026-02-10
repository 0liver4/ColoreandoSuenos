import { Sparkles } from "lucide-react";
import Logo from "../../../public/ColoreandoSuenos/Marca - Coloreando Sueños-20250320T160300Z-001/Marca - Coloreando Sueños/Patrones/Patrones_gris.jpg";
import React from "react";

function OurServices() {
    return (
        <div className="relative min-h-screen">
            {/* Imagen de fondo con transparencia */}
            <div
                style={{ backgroundImage: `url(${Logo})` }}
                className="absolute inset-0 bg-cover bg-center opacity-30"
            />

            {/* Pastilla Titular */}
            <div className="relative z-10 flex items-center justify-center pt-25">
                <div className="w-fit rounded-full flex items-center px-4 py-2 " style={{ backgroundColor: 'rgba(63, 169, 245, 0.1)' }}>
                    <span className="text-[#3FA9F5] font-Poppins">Centro de Estimulación Temprana</span>
                </div>
            </div>
        </div>

    );
}

export default OurServices;