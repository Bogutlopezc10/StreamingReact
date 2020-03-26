import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserEdit } from 'react-icons/fa';
import './Header.css';
import { useAuth0 } from '../auth0wrapper';


const displayToken = async (getTokenCallback) => {
  const token = await getTokenCallback();
  console.log('Your token ', token)
}

const Header = () => {
  const [active, setActive] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, user, loading, getTokenSilently, getIdTokenClaims } = useAuth0();

  if (loading) {
    return (
      <p>Cargando</p>
    );
  }

  displayToken(getTokenSilently);
  displayToken(getIdTokenClaims);

  return (
    <>
      <div className="nav shadow align-items-stretch justify-content-between bg-default fixed-top">
        <div className="col-md-12 col-lg logo d-flex align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <h2>Streaming</h2>
          </Link>
        </div>
        <nav className="col-md-12 col-lg-auto menu d-flex align-items-stretch flex-wrap flex-sm-nowrap flex-nowrap">
          <Link className="c-1 d-flex align-items-center" to={'/categories'}>
            <div className="d-flex flex-column text-center">
              <span>Categorias</span>
              <i className="icono fa fa-briefcase mt-1"></i>
            </div>
          </Link>
          <Link to={'/courses'} className="c-2 d-flex align-items-center">
            <div className="d-flex flex-column text-center">
              <span>Cursos</span>
              <i className="icono fa fa-folder-open mt-1"></i>
            </div>
          </Link>
          <a onClick={() => setActive(true)} className="c-3 border-0 d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
              {
                isAuthenticated && user &&
                <img src={user.picture}  width="60" height="60" style={{ border: "1px solid gray" }} className="rounded-circle shadow z-depth-0"
                  alt="avatar image" />
              }
            </div>
          </a>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col menu-principal ${active ? 'active' : ''}`}>
            <nav>
              {!isAuthenticated &&
                <a className="header-prueba" onClick={() => loginWithRedirect({})}><i className="fab fa-google"></i>Iniciar sesión</a>
              }
              {isAuthenticated && 
                <a className="header-prueba" onClick={() => logout()}><i className="fab fa-google"></i>Cerrar sesión</a>
              }

              <Link onClick={() => setActive(false)} to="/"><i className="fas fa-home"></i>Home</Link>
              <Link onClick={() => setActive(false)} to="/"><FaUserEdit style={{ marginRight: "15px", marginTop: "-3px" }} size={21} />Editar perfil</Link>
              <Link onClick={() => setActive(false)} to="/courses"><i className="fas fa-folder-open"></i>Cursos ofertados</Link>
              <Link onClick={() => setActive(false)} to="/teacher"><i className="fas fa-cogs"></i>Panel de control</Link>
              <Link onClick={() => setActive(false)} to="/userCourses"><i className="fas fa-list-alt"></i>Mis cursos</Link>
            </nav>
          </div>
          <a className="col" onClick={() => setActive(false)} className={`fondo-enlace ${active ? 'active' : ''}`}></a>
        </div>
      </div>
    </>
  );
};

export default Header;
