import React, { useState } from 'react'
import { ListaEquipos } from './ListaEquipos'
import { RegistraEquipo } from './RegistraEquipo'

export const EquiposMaquinaria = () => {

    const [controlView, setControlView] = useState('lista')

    const viewEquipos = () => {
        if (controlView === 'lista') {
            return (
                <ListaEquipos setControlView = { setControlView }/>
            )
        } else {
            return (
                <RegistraEquipo setControlView = { setControlView } />
            )
        }
    }

    return (
        <div className='div-container'>
            {
                viewEquipos()
            }
        </div>
    )
}
