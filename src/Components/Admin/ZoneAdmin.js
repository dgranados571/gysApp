import React, { useState } from 'react'
import { MenuHeader } from './MenuHeader'
import { Resumen } from './Resumen';
import { EquiposMaquinaria } from './EquiposMaquinaria';
import { UsuariosTecnicos } from './UsuariosTecnicos';
import { AgendaManteniemiento } from './AgendaManteniemiento';
import '../../css/zoneAdmin.css'
import '../../css/calendar.css'

export const ZoneAdmin = ({ setRedirect }) => {

    const [stateMenu, setStateMenu] = useState({
        menuPadre: 'MENU1',
        menuHijo: ''
    });

    const componentMenu = () => {
        switch (stateMenu.menuPadre) {
            case 'MENU1':
                return (
                    <Resumen />
                )
            case 'MENU2':
                return (
                    <EquiposMaquinaria />
                )
            case 'MENU3':
                return (
                    <UsuariosTecnicos/>
                )
            case 'MENU4':
                switch (stateMenu.menuHijo) {
                    case 'item1':
                        return (
                            <AgendaManteniemiento />
                        )
                    case 'item2':
                        return (
                            <div className='div-container'>
                                Item 2 Menu 3
                            </div>
                        )
                    case 'item3':
                        return (
                            <div className='div-container'>
                                Item 3 Menu 3
                            </div>
                        )
                    default:
                        return (
                            <></>
                        )
                }
            default:
                return (
                    <></>
                )
        }
    }

    return (
        <>
            <MenuHeader setStateMenu={setStateMenu} setRedirect={setRedirect} />
            {componentMenu()}
        </>
    )
}
