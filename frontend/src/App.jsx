import { BrowserRouter, useRoutes } from "react-router-dom"
import routes from "~react-pages"
import "./index.css"

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-end font-Darling pb-10 space-x-2">
        <a href="/">Inicio</a>
        <a href="/about">Acerca</a>
        <a href="/users">Usuarios</a>
      </nav>
      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

export default App
