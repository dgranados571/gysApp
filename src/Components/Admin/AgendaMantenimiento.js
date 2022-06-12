import React, { useState } from 'react'
import Calendar from 'react-calendar';
import Select from 'react-select'
import DatePicker from 'react-date-picker'
import { TablaGestionTecnica } from './TablaGestionTecnica';


export const AgendaMantenimiento = () => {

    const [date, setDate] = useState(new Date())

    return (
        <>
            <div className='div-container'>
                <div className='div-style-form'>
                    <h3 className='h3-titulos'>Agendamiento de servicios</h3>
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 " >
                            <div className='div-calendar'>
                                <Calendar onChange={setDate} value={date}></Calendar>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 col-lg-7 " >
                            <div className="row">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                                    <div className='div-form'>
                                        <p className='p-label-form'> Equipo a revisar: </p>
                                        <Select placeholder='Seleccione' />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                                    <div className='div-form'>
                                        <p className='p-label-form'> Usuario técnico: </p>
                                        <Select placeholder='Seleccione' />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div className='div-form'>
                                        <p className='p-label-form'>Actividades a realizar </p>
                                        <textarea className='form-control' ></textarea>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                                    <div className='div-buttom-registra'>
                                        <button className='btn btn-primary bottom-custom'>Guardar</button>
                                    </div>
                                </div>
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
