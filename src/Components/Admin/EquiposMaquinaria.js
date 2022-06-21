import React, { useEffect, useState } from 'react'
import { ListaEquipos } from './ListaEquipos'
import { RegistraEquipo } from './RegistraEquipo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const EquiposMaquinaria = () => {

    const [controlView, setControlView] = useState('lista')
    const [toastInfo, setToastInfo] = useState({estado:false, mensaje:''})

    useEffect(() => {
        if(toastInfo.estado){
            toast(toastInfo.mensaje)
            setToastInfo({estado:false, mensaje:''})
        }
    }, [toastInfo])
    

    const viewEquipos = () => {
        if (controlView === 'lista') {
            return (
                <ListaEquipos setControlView = { setControlView }/>
            )
        } else {
            return (
                <RegistraEquipo setControlView = { setControlView } setToastInfo= {setToastInfo} />
            )
        }
    }

    return (
        <div className='div-container'>
            {
                viewEquipos()
            }
            <ToastContainer autoClose={4000} hideProgressBar={true} />
        </div>
    )
}
