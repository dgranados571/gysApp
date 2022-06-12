import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Select from 'react-select'
import DatePicker from 'react-date-picker'
import { TablaGestionTecnica } from './TablaGestionTecnica';

export const HistorialMantenimiento = () => {

    const [fechaDesde, setFechaDesde] = useState(new Date())
    const [fechaHasta, setFechaHasta] = useState(new Date())

    return (
        <>
            <div className='div-container'>
                <div className='div-style-form'>
                    <h3 className='h3-titulos'>Historial de servicios</h3>
                    <p >Seleccione el rango de fechas en el que desea verificar la información:</p>


                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 " >
                            <p className='p-label-form'> Fecha desde: </p>
                            <Calendar onChange={setFechaDesde} value={fechaDesde}></Calendar>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-4 " >
                            <p className='p-label-form'> Fecha hasta: </p>
                            <Calendar onChange={setFechaHasta} value={fechaHasta}></Calendar>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 " >
                            <p className='p-label-form'> Filtros: </p>
                            <div className='div-form'>
                                <p className='p-label-form'> Equipo: </p>
                                <Select placeholder='Seleccione' />
                            </div>
                            <div className='div-form'>
                                <p className='p-label-form'> Técnico: </p>
                                <Select placeholder='Seleccione' />
                            </div>

                            <div className='div-form'>
                                <p className='p-label-form'> Estado: </p>
                                <Select placeholder='Seleccione' />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                            <div className='div-buttom-buscar-historial'>
                                <button className='btn btn-primary bottom-custom'>Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='div-style-form'>
                    <TablaGestionTecnica />
                </div>
            </div>
        </>


    )
}
