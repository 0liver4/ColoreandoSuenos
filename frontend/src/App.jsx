import { BrowserRouter, useRoutes } from "react-router-dom"
import routes from "~react-pages"
import "./index.css"
import logo from "../public/sources/Logo/Secundario/JPG/Secundario_ColoreandoSueños_01_Negro.png"
import { useState } from "react"

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <BrowserRouter>
      <div className="relative">
        <div className="h-20 flex items-center justify-between drop-shadow-xl shadow-lg bg-white px-5">
          <div className="max-w-[200px] md:max-w-[376px]">
            <img className="w-full" src={logo} alt="Logo" />
          </div>
          <nav className="hidden md:flex justify-end font-Darling space-x-10 text-2xl mr-10">
            <a href="/" className="hover:text-gray-600 transition-colors">Inicio</a>
            <a href="/about" className="hover:text-gray-600 transition-colors">Sobre Nosotros</a>
            <a href="/users" className="hover:text-gray-600 transition-colors">Inscripciones</a>
            <a href="/services" className="hover:text-gray-600 transition-colors">Servicios</a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="flex flex-col font-Darling text-xl">
          <a
            href="/"
            className="py-4 px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </a>
          <a
            href="/about"
            className="py-4 px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </a>
          <a
            href="/users"
            className="py-4 px-5 border-b border-gray-100 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Inscripciones
          </a>
          <a
            href="/services"
            className="py-4 px-5 hover:bg-gray-50 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Servicios
          </a>
        </nav>
      </div>

      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

export default App
