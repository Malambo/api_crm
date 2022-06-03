import {useNavigate} from "react-router-dom"

export default function Cliente({cliente, handleEliminar}) {

    const {nombre, empresa, email, telefono, notas, id} = cliente
    const navigate = useNavigate()
    
    return (
        <tr className="text-center border-b hover:bg-gray-100">
            <td className="p-3 font-bold text-white bg-blue-800">{id}</td>
            <td className="p-3 font-bold text-gray-600">{nombre}</td>
            <td className="p-3 font-bold text-gray-600">
                <p>
                    <span className="font-normal text-gray-500 uppercase">Email: </span>
                    {email}
                </p>
                
                {telefono && (
                <p>
                    <span className="font-normal text-gray-500 uppercase ">Tel: </span>
                    {telefono}
                </p>)}
            </td>
            
            {empresa && (
            <td className="p-3 font-bold text-gray-600">{empresa}</td>)}
            
            <td className="p-3">
                <button
                    type="button"
                    className="block w-full px-4 py-2 text-xs text-white bg-yellow-500 rounded hover:bg-yellow-600"
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-xs text-white bg-blue-600 rounded hover:bg-blue-500"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-xs text-white bg-red-600 rounded hover:bg-red-500"
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
