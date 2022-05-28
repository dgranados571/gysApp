import React, { useState } from 'react'
import { ListaUsuariosTec } from './ListaUsuariosTec'
import { RegistraUsuarioTec } from './RegistraUsuarioTec'

export const UsuariosTecnicos = () => {

    const [controlView, setControlView] = useState('lista')

    const viewUsuariosTecnicos = () => {
        if (controlView === 'lista') {
            return (
                <ListaUsuariosTec setControlView = { setControlView }/>    
            )
        } else {
            return (
                <RegistraUsuarioTec setControlView = { setControlView } />
            )
        }
    }

    return (
        <div className='div-container'>
            {
                viewUsuariosTecnicos()
            }
        </div>
    )
}
