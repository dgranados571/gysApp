import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Paginacion } from '../../Paginacion'
import { utilUrl } from '../../utilUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import imagen1 from '../../img/mantenimiento.jpg'
import { Cargando } from '../Cargando'

export const ListaEquipos = ({ setControlView }) => {

    const { urlEntorno } = utilUrl();
    const [cargando, setCargando] = useState(false)

    const [elementsPaginacion, setElementsPaginacion] = useState(
        { totalElementos: '0', elementosPorPagina: '4', paginaActual: '1' }
    );
    const { paginaActual, elementosPorPagina } = elementsPaginacion;

    const [elementsList, setElementsList] = useState([])

    const actionAddMachine = () => {
        setControlView('registra')
    }

    useEffect(() => {
        getInformacionEquipos();
    }, [paginaActual])

    const getInformacionEquipos = async () => {
        setCargando(true);
        await axios.get(`${urlEntorno}/service/gys/obtieneEquipos?paginaActual=${paginaActual}&elementosPorPagina=${elementosPorPagina}`, {
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Origin": '*'
                })
        }).then((response) => {
            setTimeout(() => {
                console.log(response);
                setElementsList(response.data.equipoMaquinaDTOList)
                setElementsPaginacion({ ...elementsPaginacion, totalElementos: response.data.totalElementos })
                setCargando(false);
            }, 500)
        }).catch((error) => {
            setTimeout(() => {
                console.log(error);
                setElementsPaginacion({ ...elementsPaginacion, totalElementos: 0 })
                setCargando(false);
            }, 500)
        })
    }

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
                                            <img className='img-card-machine' src={element.urlImagenInicial ? element.urlImagenInicial : imagen1} alt='image'></img>
                                        </div>
                                        <div className='div-info-card'>
                                            <div className='div-info-card-element'>
                                                <p className='p-label-card'> Nombre </p>
                                                <p className='tag-carf-list'>{element.nombre_equipo}</p>
                                            </div>
                                            <div className='div-info-card-element'>
                                                <p className='p-label-card'>Ubicación</p>
                                                <p className='tag-carf-list'>{element.linea_produccion}</p>
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
            {cargando ?
                <Cargando />
                :
                <></>
            }
        </>
    )
}
