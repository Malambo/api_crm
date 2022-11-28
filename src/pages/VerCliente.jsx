import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Spinner from '../components/Spinner'

export default function VerCliente() {
    // Desestructura lo que recibe de useParams
    const {id} = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(true)

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
            setCargando(!cargando)
        }
        obtenerClienteAPI()
    }, [])

    return (
        cargando ? <Spinner /> :
            Object.keys(cliente).length === 0 ?
            <p className="text-6xl font-bold">No existe ese cliente</p> : (
                <>
                <h1 className="text-4xl font-black text-slate-700">
                    Ver cliente {cliente.id}
                </h1>

                <p className="mt-3 text-gray-500">
                    Información del cliente
                </p>
                
                <p className="mt-10 text-4xl font-bold text-gray-700">
                    <span className="text-2xl font-normal text-gray-500">Cliente: </span>
                    {cliente.nombre}
                </p>
                
                <p className="mt-4 text-2xl text-gray-700 text-normal">
                    <span className="font-normal text-gray-500">Empresa: </span>
                    {cliente.empresa}
                </p>
                
                <p className="mt-4 text-2xl text-gray-700 text-normal">
                    <span className="font-normal text-gray-500">Email: </span>
                    {cliente.email}
                </p>
                
                {cliente.telefono && (
                    <p className="mt-4 text-2xl text-gray-700 text-normal">
                    <span className="font-normal text-gray-500">Teléfono: </span>
                    {cliente.telefono}
                </p>)}
                {cliente.notas && (
                <p className="mt-4 text-base text-gray-700 text-normal">
                    <span className="block text-2xl text-gray-500">Notas: </span>
                    {cliente.notas}
                </p>)}
                </>
        )
    )
}
