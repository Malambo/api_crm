
export default function Alerta({children}) {

    return (
        <div className="text-red-600 text-xs border-l-4 border-red-600 pl-2">
            {children}
        </div>
    )
}
