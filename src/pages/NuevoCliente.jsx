import Formulario from '../components/Formulario';

export default function NuevoCliente() {

    return (
        <>
        <h1 className="text-4xl font-black text-blue-900">
            Nuevo cliente
        </h1>

        <p className="mt-3 text-gray-600">
            Llena los siguientes campos para registrar un cliente
        </p>

        <Formulario
            titulo={'Agregar un cliente nuevo'}
            textoBoton={'Agregar cliente'}
        />
        </>
    );
}
