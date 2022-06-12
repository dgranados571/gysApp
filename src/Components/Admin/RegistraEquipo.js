import React, { useRef, useState } from 'react'
import Select from 'react-select'
import axios from 'axios'
import { utilUrl } from '../../utilUrl'
import { Cargando } from '../Cargando'

export const RegistraEquipo = ({ setControlView }) => {

    const { urlEntorno } = utilUrl();
    const [cargando, setCargando] = useState(false)
    const [controlFormValidado, setControlFormValidado] = useState(false)

    const lineaProduccionOptions = [
        { value: 'L1', label: 'Linea 1' },
        { value: 'L2', label: 'Linea 2' },
        { value: 'L3', label: 'Linea 3' },
        { value: 'L4', label: 'Linea 4' },
        { value: 'L5', label: 'Linea 5' },
        { value: 'L6', label: 'Linea 6' }
    ]

    const estadoOptions = [
        { value: 'ACTIVA', label: 'Activa' },
        { value: 'INACTIVA', label: 'Fuera de servicio' }
    ]

    const [nombreEquipo, setNombreEquipo] = useState('');
    const [numeroPlaca, setNumeroPlaca] = useState('');
    const [tipoMaquina, setTipoMaquina] = useState('');
    const [marcaEquipo, setMarcaEquipo] = useState('');
    const [fechaCompra, setFechaCompra] = useState('');
    const [lineaProduccion, setLineaProduccion] = useState('')
    const [estadoMaquina, setEstadoMaquina] = useState('')
    const [archivos, setArchivos] = useState([]);

    const nombreEquipoRef = useRef('')
    const numeroPlacaRef = useRef('')
    const tipoMaquinaRef = useRef('')
    const marcaEquipoRef = useRef('')
    const fechaCompraRef = useRef('')
    const lineaProduccionRef = useRef('')
    const estadoMaquinaRef = useRef('')
    const archivosRef = useRef('')

    const enviaInformacion = () => {
        validaForm();
        if (controlFormValidado) {
            enviaInformacionPost();
        }
    }

    const validaForm = () => {

        let formValidado = [];

        nombreEquipoRef.current.className = 'form-control';
        if (nombreEquipo.length == 0) {
            formValidado.push('nombreEquipo');
            nombreEquipoRef.current.className = 'form-control form-control-error'
        }

        numeroPlacaRef.current.className = 'form-control';
        if (numeroPlaca.length == 0) {
            formValidado.push('numeroPlaca');
            numeroPlacaRef.current.className = 'form-control form-control-error';
        }

        tipoMaquinaRef.current.className = 'form-control';
        if (tipoMaquina.length == 0) {
            formValidado.push('tipoMaquina');
            tipoMaquinaRef.current.className = 'form-control form-control-error';
        }

        marcaEquipoRef.current.className = 'form-control';
        if (marcaEquipo.length == 0) {
            formValidado.push('marcaEquipo');
            marcaEquipoRef.current.className = 'form-control form-control-error';
        }

        fechaCompraRef.current.className='form-control';
        if (fechaCompra.length == 0) {
            formValidado.push('fechaCompra');
            fechaCompraRef.current.className='form-control form-control-error';
        }

        lineaProduccionRef.current.className = 'form-control';
        if (lineaProduccion.length == 0) {
            formValidado.push('lineaProduccion');
            lineaProduccionRef.current.className = 'form-control form-control-error';
        }

        estadoMaquinaRef.current.className = 'form-control';
        if (estadoMaquina.length == 0) {
            formValidado.push('estadoMaquina');
            estadoMaquinaRef.current.className = 'form-control form-control-error';
        }

        archivosRef.current.className = 'form-control';
        if (archivos.length == 0) {
            formValidado.push('archivos');
            archivosRef.current.className = 'form-control form-control-error';
        }

        if (formValidado.length == 0) {
            setControlFormValidado(true)
        } else {
            formValidado.splice(0, formValidado.length)
            setControlFormValidado(false)
        }

    }

    const enviaInformacionPost = async () => {
        setCargando(true)
        const f = new FormData();
        f.append('nombreEquipo', nombreEquipo);
        f.append('numeroPlaca', numeroPlaca);
        f.append('tipoMaquina', tipoMaquina);
        f.append('marcaEquipo', marcaEquipo);
        f.append('fechaCompra', fechaCompra);
        f.append('lineaProduccion', lineaProduccion);
        f.append('estadoMaquina', estadoMaquina);

        for (let index = 0; index < archivos.length; index++) {
            f.append('files', archivos[index])
        }
        await axios.post(`${urlEntorno}/service/gys/registraEquipos`, f, {
            headers: new Headers(
                {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                    "Access-Control-Allow-Origin": '*'
                })
        }).then((response) => {
            setTimeout(() => {
                setCargando(false)
                console.log(response)
            }, 1000)
        }).catch((error) => {
            setTimeout(() => {
                setCargando(false)
                console.log(error)
            }, 1000)
        })
    }

    const cancelaAgregaMachine = () => {
        setControlView('lista');
    }

    return (
        <div className='div-style-form'>
            <h3 className='h3-titulos'>Registro de equipos</h3>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Nombre del equipo: </p>
                        <input ref={nombreEquipoRef} type="text" className='form-control' placeholder='Ej: Maquina 1' autoComplete='off' value={nombreEquipo} onChange={(e) => setNombreEquipo(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> No de placa: </p>
                        <input ref={numeroPlacaRef} type="text" className='form-control' placeholder='Ej: CORT-4466' autoComplete='off' value={numeroPlaca} onChange={(e) => setNumeroPlaca(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Tipo de maquinaria: </p>
                        <input ref={tipoMaquinaRef} type="text" className='form-control' placeholder='Ej: Cortadora' autoComplete='off' value={tipoMaquina} onChange={(e) => setTipoMaquina(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'>Marca: </p>
                        <input ref={marcaEquipoRef} type="text" className='form-control' placeholder='Ej: Tesla' autoComplete='off' value={marcaEquipo} onChange={(e) => setMarcaEquipo(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Fecha de compra: </p>
                        <input ref={fechaCompraRef} type="date" className='form-control' placeholder='Ej: Cortadora' autoComplete='off' value={fechaCompra} onChange={(e) => setFechaCompra(e.target.value)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Linea de producción: </p>
                        <Select ref={lineaProduccionRef} options={lineaProduccionOptions} defaultValue={lineaProduccion} onChange={(e) => setLineaProduccion(e.value)} placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Estado: </p>
                        <Select ref={estadoMaquinaRef} options={estadoOptions} defaultValue={estadoMaquina} onChange={(e) => setEstadoMaquina(e.value)} placeholder='Seleccione' />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 " >
                    <div className='div-form'>
                        <p className='p-label-form'> Imagenes: </p>
                        <input ref={archivosRef} type="file" className='form-control' multiple onChange={(e) => setArchivos(e.target.files)} />
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 " >
                    <div className='div-buttom-registra'>
                        <button className='btn btn-primary bottom-custom-secundary' onClick={cancelaAgregaMachine}>Cancelar</button>
                        <button className='btn btn-primary bottom-custom' onClick={enviaInformacion}>Guardar</button>
                    </div>
                </div>
            </div>
            {cargando ?
                <Cargando />
                :
                <></>
            }
        </div>
    )
}
