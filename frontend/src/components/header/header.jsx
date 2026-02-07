import { Instagram, Mail } from "lucide-react";
import { BiSolidMap } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

import React from "react";

function Header() {
    return (
        <div className="h-20 min-h-10 w-full bg-[#ED1C24] sm:px-10">
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
    );
}
export default Header;