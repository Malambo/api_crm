import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {useNavigate} from 'react-router-dom'
import Alerta from './Alerta'

export default function Formulario({titulo, textoBoton, cliente={}}) {
    const navigate = useNavigate()
    const handleSubmit = async (values) => {
        try {
            let respuesta
            if (cliente.id){
                // Edita un cliente (para editar tiene que ser el método PUT y hay que pasarle un id)
                const url = `${import.meta.env.VITE_API_URL}/${cliente.id}`
                console.log('Formulario: ', url)
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            } else {
                // Crea un nuevo cliente
                const url = import.meta.env.VITE_API_URL
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            await respuesta.json()
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
                   .min(3, 'El nombre es muy corto')
                   .max(20, 'El nombre es muy largo')
                   .required('El nombre es obligatorio'),
        empresa: Yup.string()
                    .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
                  .email('El email no es válido')
                  .required('El email es obligatorio'),
        telefono: Yup.number().typeError('El número de teléfono no es válido')
                     .integer('El número de teléfono no es válido')
                     .positive('El número de teléfono no es válido'),
      })

    return (
        <div className="px-5 py-10 mx-auto mt-10 bg-white rounded-md shadow-md md:w-3/4">
            <h1 className="text-xl font-bold text-center uppercase text-slate-600 ">
                {titulo}
            </h1>

            <Formik
                initialValues={cliente}
                // permite que los campos del formulario se rellenen con los datos que vienen de "afuera" ({cliente}).
                enableReinitialize={true}
                onSubmit={async(values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                  }}
                validationSchema={nuevoClienteSchema}
            >
                {({errors, touched}) => (
                <Form
                    className='mt-10'
                >
                    <div className="mb-4">
                        <label
                            className="text-slate-600"
                            htmlFor='nombre'
                        >
                            Nombre:
                        </label>
                        <Field
                            id='nombre'
                            type="text"
                            className="block w-full p-3 mt-2 bg-slate-50"
                            placeholder="Nombre del cliente"
                            name="nombre"
                        />
                        {errors.nombre && touched.nombre ? (
                            <Alerta>{errors.nombre}</Alerta>
                            ) : null
                        }
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-600"
                            htmlFor='empresa'
                        >
                            Empresa:
                        </label>
                        <Field
                            id='empresa'
                            type="text"
                            className="block w-full p-3 mt-2 bg-slate-50"
                            placeholder="Empresa del cliente"
                            name="empresa"
                        />
                        {errors.empresa && touched.empresa ? (
                            <Alerta>{errors.empresa}</Alerta>
                            ) : null
                        }
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-600"
                            htmlFor='email'
                        >
                            Email:
                        </label>
                        <Field
                            id='email'
                            type="email"
                            className="block w-full p-3 mt-2 bg-slate-50"
                            placeholder="Email del cliente"
                            name="email"
                        />
                        {errors.email && touched.email ? (
                            <Alerta>{errors.email}</Alerta>
                            ) : null
                        }
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-600"
                            htmlFor='telefono'
                        >
                            Teléfono:
                        </label>
                        <Field
                            id='telefono'
                            type="tel"
                            className="block w-full p-3 mt-2 bg-slate-50"
                            placeholder="Teléfono del cliente"
                            name="telefono"
                        />
                        {errors.telefono && touched.telefono ? (
                            <Alerta>{errors.telefono}</Alerta>
                            ) : null
                        }
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-600"
                            htmlFor='notas'
                        >
                            Notas:
                        </label>
                        <Field
                            as='textarea'
                            id='notas'
                            type="text"
                            className="block w-full h-40 p-3 mt-2 bg-slate-50"
                            placeholder="Notas"
                            name="notas"
                        />
                    </div>

                    <input
                        type="submit"
                        value={textoBoton}
                        className="w-full px-4 py-2 text-lg font-bold text-white rounded-md shadow-md bg-slate-600 hover:bg-slate-800 hover:shadow-none"
                    />
                </Form>
                )}
            </Formik>
        </div>
    )
}
