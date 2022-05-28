import React from 'react'
import Select from 'react-select'

export const RegistraEquipo = ({ setControlView }) => {

    const cancelaAgregaMachine = () => {
        setControlView('lista');
    }

    return (

        <div className='div-style-form'>
            <h3 className='h3-titulos'>Registro de equipos</h3>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Nombre del equipo: </p>
                        <input type="text" className='form-control' placeholder='Ej: Maquina 1' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> No de placa: </p>
                        <input type="text" className='form-control' placeholder='Ej: CORT-4466' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Tipo de maquinaria: </p>
                        <input type="text" className='form-control' placeholder='Ej: Cortadora' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'>Marca: </p>
                        <input type="text" className='form-control' placeholder='Ej: Tesla' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Fecha de compra: </p>
                        <input type="date" className='form-control' placeholder='Ej: Cortadora' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Linea de producción: </p>
                        <Select placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Estado: </p>
                        <Select placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Imagenes: </p>
                        <input type="file" className='form-control' multiple />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                    <div className='div-buttom-registra'>
                        <button className='btn btn-primary bottom-custom-secundary' onClick={cancelaAgregaMachine}>Cancelar</button>
                        <button className='btn btn-primary bottom-custom'>Guardar</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
