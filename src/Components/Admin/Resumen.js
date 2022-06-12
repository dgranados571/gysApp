import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears, faListCheck, faUserGear } from '@fortawesome/free-solid-svg-icons'
import { TablaGestionTecnica } from './TablaGestionTecnica'

export const Resumen = () => {

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
                        <TablaGestionTecnica/>
                    </div>
                </div>
            </div>

        </div>
    )
}
