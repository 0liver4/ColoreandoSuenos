import { BrowserRouter, useRoutes } from "react-router-dom"
import routes from "~react-pages"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="/">Inicio</a> |{" "}
        <a href="/about">Acerca</a> |{" "}
        <a href="/users">Usuarios</a> | {" "}
      </nav>
      <hr />
      <AppRoutes />
    </BrowserRouter>
  )
}

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

export default App
