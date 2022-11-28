import {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Formulario from "../components/Formulario"

export default function EditarCliente() {
    
    const {id} = useParams()
    const [cliente, setCliente] = useState({})

    useEffect(() => {

        const obtenerClienteAPI = async () => {

            try {
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
        }

        obtenerClienteAPI()

    }, [])

    return (
        <>
        <h1 className="text-4xl font-black text-blue-900">
            Editar clientes
        </h1>

        <p className="mt-3 text-gray-600">
            Cambia datos del cliente elegido
        </p>

        <Formulario
            titulo={`Editar el cliente ${id}`}
            textoBoton={'Guardar cambios'}
            cliente={cliente}
        />
        </>
    );
}
