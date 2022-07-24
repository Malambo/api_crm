import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/Layout'
import Inicio from './pages/Inicio'
import NuevoCliente from './pages/NuevoCliente'
import EditarCliente from './pages/EditarCliente'
import VerCliente from './pages/VerCliente'

export default function App() {

  console.log(import.meta.env.VITE_API_URL)

  return (
    <BrowserRouter>
      <Routes>
        {/* Agrupa las rutas en su interior. Dentro del componente Layout (master page) van los componentes internos (Inicio) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="clientes/nuevo" element={<NuevoCliente />} />
          <Route path="clientes/editar/:id" element={<EditarCliente />} />
          <Route path="clientes/:id" element={<VerCliente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
