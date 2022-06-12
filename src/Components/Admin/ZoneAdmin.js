import React, { useState } from 'react'
import { MenuHeader } from './MenuHeader'
import { Resumen } from './Resumen';
import { EquiposMaquinaria } from './EquiposMaquinaria';
import { UsuariosTecnicos } from './UsuariosTecnicos';
import { AgendaMantenimiento } from './AgendaMantenimiento';
import { HistorialMantenimiento } from './HistorialMantenimiento';
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
                            <AgendaMantenimiento />
                        )
                    case 'item2':
                        return (
                            <HistorialMantenimiento/>
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
