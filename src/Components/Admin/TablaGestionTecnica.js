import React, { useState } from 'react'

export const TablaGestionTecnica = () => {
    
    const [gestionTecnica, setGestionTecnica] = useState([
        { usuarioTec: 'Técnico 1', equipoIntervenido: 'Maquina 1 - Linea 2 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite'], estadoAtencion: 'Atendida' },
        { usuarioTec: 'Técnico 2', equipoIntervenido: 'Maquina 9 - Linea 3 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite', 'Cambio de refrigerante'], estadoAtencion: 'Cancelada' },
        { usuarioTec: 'Técnico 1', equipoIntervenido: 'Maquina 3 - Linea 4 ', actividades: ['Manteniemiento preventivo'], estadoAtencion: 'Pendiente por atender' },
        { usuarioTec: 'Técnico 3', equipoIntervenido: 'Maquina 1 - Linea 2 ', actividades: ['Cambio de refrigerante'], estadoAtencion: 'Pendiente por atender' },
        { usuarioTec: 'Técnico 4', equipoIntervenido: 'Maquina 6 - Linea 6 ', actividades: ['Manteniemiento preventivo', 'Cambio de aceite', 'Cambio de refrigerante'], estadoAtencion: 'Atendida' },
    ])

    return (
        <>
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

        </>
    )
}
