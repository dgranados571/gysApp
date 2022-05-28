import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faListCheck, faUserGear } from '@fortawesome/free-solid-svg-icons'

export const Resumen = () => {

    const [gestionTecnica, setGestionTecnica] = useState([
        { usuarioTec: 'Técnico 1', equipoIntervenido: 'Maquina 1 - Linea 2 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite'], estadoAtencion: 'Atendida' },
        { usuarioTec: 'Técnico 2', equipoIntervenido: 'Maquina 9 - Linea 3 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite', 'Cambio de refrigerante'], estadoAtencion: 'Cancelada' },
        { usuarioTec: 'Técnico 1', equipoIntervenido: 'Maquina 3 - Linea 4 ', actividades: ['Manteniemiento preventivo'], estadoAtencion: 'Pendiente por atender' },
        { usuarioTec: 'Técnico 3', equipoIntervenido: 'Maquina 1 - Linea 2 ', actividades: ['Cambio de refrigerante'], estadoAtencion: 'Pendiente por atender' },
        { usuarioTec: 'Técnico 4', equipoIntervenido: 'Maquina 6 - Linea 6 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite', 'Cambio de refrigerante'], estadoAtencion: 'Atendida' },
    ])


    return (
        <div className='div-container'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 mt-3" >
                    <div className='div-resumen-children'>
                        <div className='div-resumen-children-machine'>
                            <FontAwesomeIcon className='icon-machine' icon={faGears} />
                            <div>
                                <p className='p-element-machine-1' >0</p>
                                <p className='p-element-machine-2' >Total equipos</p>
                            </div>
                        </div>
                        <div className='link-e-machine'>
                            <button className='btn btn-link a-link-redirect' >
                                Ver equipos y maquinas
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8 mt-3" >
                    <div className='div-resumen-children'>
                        <div className='div-resumen-children-machine'>
                            <FontAwesomeIcon className='icon-machine' icon={faListCheck} />
                            <div>
                                <p className='p-element-machine-1'>0</p>
                                <p className='p-element-machine-2' >Tareas por atender</p>
                            </div>
                            <div>
                                <p className='p-element-machine-1'>0</p>
                                <p className='p-element-machine-2' >Tareas atendidas</p>
                            </div>
                        </div>
                        <div className='link-e-machine'>
                            <button className='btn btn-link a-link-redirect' >
                                Gestionar nueva tarea
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-4" >
                    <div className='div-resumen-children'>
                        <div className="row ">
                            <div className="col-12 col-sm-1 col-md-2 col-lg-3" ></div>
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6" >
                                <div className='div-resumen-children-machine'>
                                    <FontAwesomeIcon className='icon-machine' icon={faUserGear} />
                                    <div className='div-info-today'>
                                        <h3 className='h3-titulos'>Gestión técnica</h3>
                                        <p className='h3-titulos'>10/05/2022</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-1 col-md-2 col-lg-3" ></div>
                        </div>
                        <div className='div-table-info-today'>
                            <div className='tables-overflow-list'>
                                <table className='table table-striped table-info-today' >
                                    <thead className='head-table table-head-info-today'>
                                        <tr>
                                            <th className='p-label-form'>Usuario técnico</th>
                                            <th className='p-label-form'>Equipo a intervenir</th>
                                            <th className='p-label-form'>Actividades</th>
                                            <th className='p-label-form'>Estado de la atención</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            gestionTecnica.map((gestionTec) => {
                                                return (
                                                    <tr  >
                                                        <td >{gestionTec.usuarioTec} </td>
                                                        <td >{gestionTec.equipoIntervenido} </td>
                                                        <td >{
                                                            gestionTec.actividades.map((actividad) => {
                                                                return (
                                                                    <>
                                                                        {actividad}<br />
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                        </td>
                                                        <td > {gestionTec.estadoAtencion} </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
