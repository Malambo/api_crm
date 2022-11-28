import {useNavigate} from "react-router-dom"

export default function Cliente({cliente, handleEliminar}) {

    const {nombre, empresa, email, telefono, notas, id} = cliente
    const navigate = useNavigate()
    
    return (
        <tr className="text-center border-b hover:bg-slate-100">
            <td className="p-3 font-bold text-white bg-slate-800">{id}</td>
            <td className="p-3 font-bold text-slate-600">{nombre}</td>
            <td className="p-3 font-bold text-slate-600">
                <p>
                    <span className="font-normal uppercase text-slate-500">Email: </span>
                    {email}
                </p>
                
                {telefono && (
                <p>
                    <span className="font-normal uppercase text-slate-500 ">Tel: </span>
                    {telefono}
                </p>)}
            </td>
            
            {empresa && (
            <td className="p-3 font-bold text-slate-600">{empresa}</td>)}
            <td className="p-3">
                <button
                    type="button"
                    className="block w-full px-4 py-2 text-xs text-white rounded bg-slate-300 hover:bg-slate-500"
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-xs text-white rounded bg-slate-400 hover:bg-slate-500"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="block w-full px-4 py-2 mt-2 text-xs text-white rounded bg-stone-400 hover:bg-red-500"
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}
