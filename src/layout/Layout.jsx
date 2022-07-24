import {Link, Outlet, useLocation} from "react-router-dom"

export default function Layout() {
    const location = useLocation()
    const urlActual = location.pathname

    return (
        <div className="md:flex md:min-h-screen">
            <div className="px-5 py-10 bg-blue-900 md:w-1/4">
                <h2 className="text-4xl font-black text-center text-white">crmClientes</h2>
                <nav className="mt-10">
                    <Link
                        className={`${urlActual === '/' ? 'text-blue-300' : ' text-white'} block text-2xl mt-2 hover:text-blue-100`}
                        to="/">
                            Clientes
                    </Link>
                    <Link
                        className={`${urlActual === '/clientes/nuevo' ? 'text-blue-300' : ' text-white'} block text-2xl mt-2 hover:text-blue-100`}
                        to="/clientes/nuevo">
                            Nuevo cliente
                    </Link>
                </nav>
            </div>
            <div className="p-10 overflow-scroll md:w-3/4 md:h-screen">
                <Outlet />
            </div>
            
        </div>
    );
}
