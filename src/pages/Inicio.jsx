// Para mandar a llamar a la API una vez que el componente esté listo
import {useState, useEffect} from "react"
import Cliente from "../components/Cliente"

export default function Inicio() {
    
    const [clientes, setClientes] = useState([])

    // Se ejecuta una sola vez
    useEffect(() => {
        const obtenerClientesAPI = async () => {
            try {
                const url = "http://localhost:3001/clientes"
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerClientesAPI()
    }, [])

    const handleEliminar = async id => {
        const confirmar = confirm('¿Estás seguro de eliminar este cliente?')

        if (confirmar) {
            try {
                const url = `http://localhost:3001/clientes/${id}`
                const respuesta = await fetch(url, {
                    method: 'DELETE'
                })
                await respuesta.json()
                
                // Se podría actualizar la página volviendo a cargar los datos de la API, pero esto hace pedidos innecesarios a la base de datos. Mejor actualizar el state trayendo todos menos el que se acaba de borrar:
                const arrayClientes = clientes.filter(client => client.id !== id)
                setClientes(arrayClientes)
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
        <h1 className="text-4xl font-black text-blue-900">
            Clientes
        </h1>
        <p className='mt-3 text-gray-600'>Administra tus clientes</p>

        <table className="w-full mt-5 bg-white shadow table-auto">
            <thead className="text-white bg-blue-800">
                <tr>
                    <th className="p-2">Id</th>
                    <th className="p-2">Nombre</th>
                    <th className="p-2">Contacto</th>
                    <th className="p-2">Empresa</th>
                    <th className="p-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map(cliente => (
                    <Cliente
                        key={cliente.id}
                        cliente={cliente}
                        handleEliminar={handleEliminar}
                    />
                ))}
            </tbody>
        </table>
        </>
    );
}
