import React from 'react'
import Select from 'react-select'

export const RegistraUsuarioTec = ({ setControlView }) => {

    const cancelaAgregaUsuarioTec = () => {
        setControlView('lista')
    }


    return (
        <div className='div-style-form'>
            <h3 className='h3-titulos'>Registro de usuarios</h3>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Nombres completos: </p>
                        <input type="text" className='form-control' placeholder='Ej: Guatavo Andres' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Apellidos: </p>
                        <input type="text" className='form-control' placeholder='Ej: Sanabria Torres' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Tipo documento: </p>
                        <Select placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Número de documento: </p>
                        <input type="text" className='form-control' placeholder='Ej: 80697555' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'>Teléfono de contacto 1: </p>
                        <input type="text" className='form-control' placeholder='Ej: (601) 4448899' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Número de celular: </p>
                        <input type="text" className='form-control' placeholder='Ej: 311 5556688' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                    <hr className='hr-usuario-tec' />
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Usuario de acceso: </p>
                        <input type="text" className='form-control' placeholder='Ej: gsanabria@gystecnico.com' autoComplete='off' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-buttom-registra-usuario-tec'>
                        <button className='btn btn-primary bottom-custom-secundary' onClick={ cancelaAgregaUsuarioTec } >Cancelar</button>
                        <button className='btn btn-primary bottom-custom'>Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
