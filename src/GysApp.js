import React, { useState } from 'react'
import { ZoneAdmin } from './Components/Admin/ZoneAdmin.js';
import { Login } from './Components/Login.js';

export const GysApp = () => {

  const [redirect, setRedirect] = useState({
    autorizado: false,
    usuario: '',
    rol: ''
  })

  const validateRedirect = () => {
    if (redirect.autorizado) {
      if (redirect.rol === 'ADMIN') {
        return (
          <ZoneAdmin setRedirect={setRedirect} />
        )
      } else if (redirect.rol === 'TECNICO') {
        return (
          <>ZONA TECNICA</>
        )
      }
    } else {
      return (
        <Login setRedirect={setRedirect} />
      )
    }
  }

  return (
    <>
      {
        validateRedirect()
      }
    </>
  )
}
