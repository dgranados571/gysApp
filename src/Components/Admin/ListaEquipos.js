import React, { useEffect, useState } from 'react'
//import axios from 'axios'
import { Paginacion } from '../../Paginacion'
import { utilUrl } from '../../utilUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import imagen1 from '../../img/mantenimiento.jpg'
import { EquipoDetalles } from './EquipoDetalles'


export const ListaEquipos = ({ setControlView }) => {

    const { urlEntorno } = utilUrl();
    const [cargando, setCargando] = useState(false)
    const [verDetalle, setVerDetalle] = useState(false)

    const [elementsPaginacion, setElementsPaginacion] = useState(
        { totalElementos: '0', elementosPorPagina: '4', paginaActual: '1' }
    );
    const { paginaActual, elementosPorPagina } = elementsPaginacion;

    const [elementsList, setElementsList] = useState([])
    const elementsListEskeleton = [
        'Elemet1', 'Elemet2', 'Elemet3', 'Elemet4'
    ]

    const actionAddMachine = () => {
        setControlView('registra')
    }

    useEffect(() => {
        getInformacionEquipos();
    }, [paginaActual])

    const getInformacionEquipos = async () => {
        setCargando(true);
        
        await fetch(`${urlEntorno}/service/gys/obtieneEquipos?paginaActual=${paginaActual}&elementosPorPagina=${elementosPorPagina}`, {
            method: 'GET'
        }).then(resp => {
            return resp.json()
        }).then(data => {
            setTimeout(() => {
                setElementsList(data.equipoMaquinaDTOList)
                setElementsPaginacion({ ...elementsPaginacion, totalElementos: data.totalElementos })
                setCargando(false);
            }, 500)
        }).catch((error) => {
            setTimeout(() => {
                console.log(error);
                setElementsPaginacion({ ...elementsPaginacion, totalElementos: 0 })
                setCargando(false);
            }, 500)
        })
/*
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
*/
    }

    const actionVerDetalle = ()=>{
        setVerDetalle(true)
    }

    return (
        <>
            <div className='div-style-form'>
                <div className='div-header-equipos'>
                    <h3 className='h3-titulos'>Equipos y maquinas</h3>
                    <button onClick={actionAddMachine} className='btn btn-link a-link-redirect'><FontAwesomeIcon className='icon-plus' icon={faCirclePlus} /></button>
                </div>
            </div>
            <div className='div-style-form'>
                {!cargando ?
                    <div className="row">
                        {
                            elementsList.map((element) => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                                        <div className='div-card-list-machine'>
                                            <div className='div-image-card'>
                                                <img className='img-card-machine' src={element.urlImagenInicial ? element.urlImagenInicial : imagen1} alt=''></img>
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
                                                <button onClick={actionVerDetalle} className='btn btn-link a-link-redirect'>Ver detalles</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className="row">
                        {
                            elementsListEskeleton.map(() => {
                                return (
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 " >
                                        <div class='div-card-list-machine'>
                                            <div class="skeleton div-image-card img-card-machine">
                                                <div class="skeleton-text skeleton"></div>
                                            </div>
                                            <div class='div-info-card'>
                                                <div class='div-info-card-element'>
                                                    <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                                                        <div class="skeleton-text skeleton"></div>
                                                    </div>
                                                    <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                                                    </div>
                                                    <div class="col-5 col-sm-5 col-md-5 col-lg-5">
                                                        <div class="skeleton-text skeleton"></div>
                                                    </div>
                                                </div>
                                                <div class='div-info-card-element'>
                                                    <div class="col-5 col-sm-5 col-md-5 col-lg-5">
                                                        <div class="skeleton-text skeleton"></div>
                                                    </div>
                                                    <div class="col-4 col-sm-4 col-md-4 col-lg-4">
                                                    </div>
                                                    <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                                                        <div class="skeleton-text skeleton"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="skeleton-link-detalles-card skeleton">
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
                <Paginacion elementsPaginacion={elementsPaginacion} setElementsPaginacion={setElementsPaginacion} />
            </div>
            <div className='div-style-form'>
            {verDetalle ?
                <EquipoDetalles setVerDetalle= {setVerDetalle}/>
                :
                <></>
            }
            </div>
        </>
    )
}
