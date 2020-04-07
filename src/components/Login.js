import React from 'react'
import './Login.css'
import { useAuth0 } from '../auth0wrapper';


const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="row d-flex align-items-center mb-4 justify-content-center">
      <div className="col-lg-6 login-col">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-center justify-content-center">
            <img src="/iniciar-sesion.png" className="login-image" alt="avatar image" />
          </div>
          <div className="col-lg-12 mt-4 d-flex align-items-center justify-content-center">
            <h1>¡ESPERA UN MOMENTO!</h1>
          </div>
          <div className="col-lg-12 mt-4 d-flex align-items-center justify-content-center">
            <h4>Para acceder a esta página debes estar logueado.</h4>
          </div>
          <div className="col-lg-12 mt-4 d-flex align-items-center justify-content-center">
            <button onClick={() => loginWithRedirect({})} type="button" className="btn course-button mr-3" style={{ borderRadius: ".25rem" }}>
              <div>
                <p className="d-inline">INICIAR SESIÓN</p>
                <i className="d-inline fas fa-sign-in-alt ml-2 mt-2"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
