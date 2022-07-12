import React from 'react'
import imagen1 from '../../img/mantenimiento.jpg'


export const EquipoDetalles = ({ setVerDetalle }) => {

    const cancelaVerDetalles = () => {
        setVerDetalle(false)
    }

    return (
        <div className='div-cargando-active'>
            <div className='div-modal-ver-detalles-equipos' >
                <h3 className='h3-titulos'>Detalle equipo </h3>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                        <div className='text-aling'>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                        </div>
                        <div className='img-list-detalle'>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                            <img className='img-card-machine-detalle' src={imagen1} alt=''></img>
                        </div>

                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 " ></div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                        <div className='div-btn-ver-detalles'>
                            <button className='btn btn-primary bottom-custom-secundary' onClick={cancelaVerDetalles}>Cancelar</button>
                            <button className='btn btn-primary bottom-custom' >Editar</button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
