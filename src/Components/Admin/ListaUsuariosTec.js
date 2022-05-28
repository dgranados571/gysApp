import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Paginacion } from '../../Paginacion';

export const ListaUsuariosTec = ({ setControlView }) => {

    const [elementsPaginacion, setElementsPaginacion] = useState(
        { totalElementos: '20', elementosPorPagina: '4', paginaActual: '1' }
    );

    const [usuariosTecnicos, setUsuariosTecnicos] = useState([
        { id:'1', nombres: 'Nombre 1', apellidos: 'Apellido 1', tipoDoc: 'CC', numeroDoc: '11663322', telefono1: '601 7600000', telefono2: '3215556699', estado: 'Activo' },
        { id:'2', nombres: 'Nombre 2', apellidos: 'Apellido 2', tipoDoc: 'CE', numeroDoc: '66995551', telefono1: '601 5546699', telefono2: '3215556699', estado: 'Inactivo' },
        { id:'3', nombres: 'Nombre 3', apellidos: 'Apellido 3', tipoDoc: 'PAS', numeroDoc: '80666321', telefono1: '601 4402255', telefono2: '3215556699', estado: 'Pendiente por activar' },
        { id:'4', nombres: 'Nombre 4', apellidos: 'Apellido 4', tipoDoc: 'CC', numeroDoc: '90999772', telefono1: '601 9984441', telefono2: '3215556699', estado: 'Pendiente por activar' },
    ])

    const actionAddUsuarioTec = () => {
        setControlView('registra')
    }

    return (
        <>
            <div className='div-style-form'>
                <div className='div-header-equipos'>
                    <h3 className='h3-titulos'> Usuarios técnicos</h3>
                    <a onClick={actionAddUsuarioTec}><FontAwesomeIcon className='icon-plus' icon={faCirclePlus} /> </a>
                </div>
            </div>
            <div className='div-style-form'>
                <div className='tables-overflow-list'>
                    <table className="table table-striped">
                        <thead className="head-table">
                            <tr>
                                <th>Nombres</th>
                                <th>Tipo Documento</th>
                                <th>No de identificación</th>
                                <th>Telefono 1</th>
                                <th>Telefono 2</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usuariosTecnicos.map((userTec) => {
                                    return (
                                        <tr  >
                                            <td > {userTec.nombres + ' ' + userTec.apellidos} </td>
                                            <td > {userTec.tipoDoc} </td>
                                            <td > {userTec.numeroDoc}  </td>
                                            <td > {userTec.telefono1} </td>
                                            <td > {userTec.telefono2} </td>
                                            <td > {userTec.estado} </td>

                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <Paginacion elementsPaginacion={elementsPaginacion} setElementsPaginacion={setElementsPaginacion} />
            </div>
        </>
    )
}
