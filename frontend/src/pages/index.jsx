import React from 'react'
import CarruselBG from '../../public/sources/Patrones/Patrones_azul.jpg'

export default function Home() {
  return (
    <div className="h-screen bg-[url('../public/sources/Patrones/Patrones_amarillo.jpg')] bg-cover bg-center">
      <div className="flex flex-row items-start justify-end gap-x-20 pt-15 px-10">
        
        {/* Texto */}
        <div className="flex flex-col items-end space-y-4 font-Darling text-white text-4xl md:text-8xl">
          <h1>Juega</h1>
          <h1>Crea</h1>
          <h1>Aprende</h1>
        </div>

        {/* Imagen */}
        <div className='pr-15'>
          <img src={CarruselBG} alt="Carrusel" className="w-[600px] md:w-[800px] h-[200px] md:h-[400px] object-cover"/>
        </div>

      </div>
    </div>
  );
}

