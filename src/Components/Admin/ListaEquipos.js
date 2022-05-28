import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import imagen1 from '../../img/panelesSolaresSol.jpg'
import imagen2 from '../../img/PanelesSolares.jpg'
import imagen3 from '../../img/mantenimiento.jpg'
import { Paginacion } from '../../Paginacion'


export const ListaEquipos = ({ setControlView }) => {

    const [elementsPaginacion, setElementsPaginacion] = useState(
        { totalElementos: '10', elementosPorPagina: '4', paginaActual: '1' }
    );

    const actionAddMachine = () => {
        setControlView('registra')
    }

    const [elementsList, setElementsList] = useState([
        { id: '1', urlImage: imagen3, nombre: 'Maquina 1', ubicacion: 'Linea 1' },
        { id: '2', urlImage: imagen3, nombre: 'Maquina 2', ubicacion: 'Linea 1' },
        { id: '3', urlImage: imagen3, nombre: 'Maquina 3', ubicacion: 'Linea 2' },
        { id: '4', urlImage: imagen3, nombre: 'Maquina 4', ubicacion: 'Linea 2' },
        { id: '5', urlImage: imagen3, nombre: 'Maquina 5', ubicacion: 'Linea 3' },
        { id: '6', urlImage: imagen3, nombre: 'Maquina 6', ubicacion: 'Linea 3' }
    ])

    return (
        <>
            <div className='div-style-form'>
                <div className='div-header-equipos'>
                    <h3 className='h3-titulos'>Equipos y maquinas</h3>
                    <a onClick={actionAddMachine}><FontAwesomeIcon className='icon-plus' icon={faCirclePlus} /> </a>
                </div>
            </div>
            <div className='div-style-form'>
                <div className="row">
                    {
                        elementsList.map((element) => {
                            return (
                                <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                                    <div className='div-card-list-machine'>
                                        <div className='div-image-card'>
                                            <img className='img-card-machine' src={element.urlImage} alt='image'></img>
                                        </div>
                                        <div className='div-info-card'>
                                            <div className='div-info-card-element'>
                                                <p className='p-label-card'> Nombre </p>
                                                <p className='tag-carf-list'>{element.nombre}</p>
                                            </div>
                                            <div className='div-info-card-element'>
                                                <p className='p-label-card'>Ubicación</p>
                                                <p className='tag-carf-list'>{element.ubicacion}</p>
                                            </div>
                                        </div>
                                        <div className='link-ver-detalles-card'>
                                            <a className='a-link-redirect'>Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Paginacion elementsPaginacion={elementsPaginacion} setElementsPaginacion={setElementsPaginacion} />
            </div>


        </>
    )
}
