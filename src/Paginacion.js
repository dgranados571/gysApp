import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export const Paginacion = ({ elementsPaginacion, setElementsPaginacion }) => {

    const { totalElementos, elementosPorPagina, paginaActual } = elementsPaginacion

    const [paginacion, setPaginacion] = useState({
        paginas: [],
        paginaActual: ''
    });

    useEffect(() => {
        let totalPagBase = Math.trunc(totalElementos / elementosPorPagina);
        const totalPagResiduo = totalElementos % elementosPorPagina;
        if (totalPagResiduo > 0) {
            totalPagBase = totalPagBase + 1;
        }
        let paginaList = []
        for (var i = 0; i < totalPagBase; i++) {
            let n = i + 1;
            paginaList.push({
                pageNum: n, classDiv: (n == paginaActual) ? 'div-pagina-link-selected' : 'div-pagina-link', classPage: (n == paginaActual) ? 'pagina-link-selected' : 'pagina-link'
            });
        }
        setPaginacion({
            paginas: paginaList,
            paginaActual: paginaActual
        });
    }, [totalElementos, elementosPorPagina, paginaActual])

    const cambiaPagina = (e) => {
        setElementsPaginacion({
            ...elementsPaginacion,
            paginaActual: e.target.id
        })
    }

    const avanzaPage = () => {
        setElementsPaginacion({
            ...elementsPaginacion,
            paginaActual: (paginaActual < paginacion.paginas.length)? parseInt(paginaActual, 10)  + 1 : paginaActual
        })
    }

    const regresaPage = () => {
        setElementsPaginacion({
            ...elementsPaginacion,
            paginaActual: (paginaActual > 1)? parseInt(paginaActual, 10)  - 1 : paginaActual
        })
    }

    return (
        <div className="row">
            <div className="col-12 col-sm-1 col-md-3 col-lg-4 " ></div>
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 " >
                <div className='div-pagination'>
                    <div >
                        <a onClick={regresaPage} className='pagina-link' ><FontAwesomeIcon icon={faAngleLeft} /> </a>
                    </div>
                    {
                        paginacion.paginas.map((page) => {
                            return (
                                <div className={page.classDiv} >
                                    <a id={page.pageNum} onClick={cambiaPagina} className={page.classPage} >{page.pageNum}</a>
                                </div>
                            )
                        })
                    }
                    <div >
                        <a onClick={avanzaPage} className='pagina-link'><FontAwesomeIcon icon={faAngleRight} /></a>
                    </div>
                </div>

            </div>
            <div className="col-12 col-sm-1 col-md-3 col-lg-4 " ></div>
        </div>
    )
}
