import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuth0 } from '../auth0wrapper';
import { FaChromecast } from 'react-icons/fa';
import { REDIRECT_URL, REDIRECT_URL_PRODUCTION } from '../actions/types';

const Header = ({ isAdmin, isTeacher }) => {
  const [active, setActive] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout, user, loading } = useAuth0();

  const renderItemsMenu = () => {
    const redirectUrlLogout = process.env.NODE_ENV !== 'production' ? REDIRECT_URL : REDIRECT_URL_PRODUCTION
    if(!isAuthenticated){
      return (
        <Link to ="/" className="header-prueba btn-block" onClick={() => loginWithRedirect({})}><i className="fas fa-sign-in-alt"></i>Iniciar sesión </Link>
      )
    }else{
      if(isAdmin){
        return(
          <>
            <Link to="/"  className="header-prueba" onClick={() => logout({returnTo: redirectUrlLogout})}><i className="fas fa-sign-out-alt"></i>Cerrar sesión</Link>
            <Link onClick={() => setActive(false)} to="/"><i className="fas fa-home"></i>Home</Link>
            <Link onClick={() => setActive(false)} to="/categories"><i className="fas fa-cogs"></i>Gestionar categorías</Link>
            <Link onClick={() => setActive(false)} to="/courses"><i className="fas fa-folder-open"></i>Cursos ofertados</Link>
          </>
        )
      }else if(isTeacher){
        return(
          <>
            <Link to="/"  className="header-prueba" onClick={() => logout({returnTo: redirectUrlLogout})}><i className="fas fa-sign-out-alt"></i>Cerrar sesión</Link>
            <Link onClick={() => setActive(false)} to="/"><i className="fas fa-home"></i>Home</Link>
            <Link onClick={() => setActive(false)} to="/teacher"><i className="fas fa-cogs"></i>Gestionar cursos</Link>
            <Link onClick={() => setActive(false)} to="/courses"><i className="fas fa-folder-open"></i>Cursos ofertados</Link>
          </>
        )
      }
      return(
        <>
          <Link to="/"  className="header-prueba" onClick={() => logout({returnTo: redirectUrlLogout})}><i className="fas fa-sign-out-alt"></i>Cerrar sesión </Link>
          <Link onClick={() => setActive(false)} to="/"><i className="fas fa-home"></i>Home</Link>
          <Link onClick={() => setActive(false)} to="/courses"><i className="fas fa-folder-open"></i>Cursos ofertados</Link>
          <Link onClick={() => setActive(false)} to="/userCourses"><i className="fas fa-list-alt"></i>Mis cursos</Link>
          <Link onClick={() => setActive(false)} to="/stream/list"><FaChromecast className="live-item"/>En vivo</Link>
        </>
      )
    }
  }

  const renderImageMenu = () => {
    if(loading){
      return(
        <div className="div-image-menu d-flex justify-content-center">
          <img src="/login.png"  width="60" height="60" style={{ border: "1px solid gray", filter:"grayscale(100%)" }} className="rounded-circle shadow z-depth-0"
          alt="photoHeaderLoading" />  
          <i className="fas fa-caret-down menu-dropdown-icon arrow-menu"></i>
        </div>    
      )
    }else{
      if(isAuthenticated && user){
        return(
          <div className="div-image-menu d-flex justify-content-center">
            <img src={user.picture}  width="60" height="60" style={{ border: "1px solid gray" }} className="rounded-circle shadow z-depth-0"
            alt="photoHeaderUser" />          
            <i className="fas fa-caret-down menu-dropdown-icon arrow-menu"></i>
          </div>
        )
      }else{
        return(
          <div className="div-image-menu d-flex justify-content-center">
            <img src="/login.png"  width="60" height="60" style={{ border: "1px solid gray" }} className="rounded-circle shadow z-depth-0"
            alt="photoHeaderNotAuthenticator" /> 
            <i className="fas fa-caret-down menu-dropdown-icon arrow-menu"></i>
          </div>    
        )
      }
    }
  }

  return (
    <>
      <div className="nav shadow align-items-stretch justify-content-between bg-default fixed-top">
        <div className="col-md-12 col-lg logo d-flex align-items-center justify-content-center justify-content-lg-start">
          <Link to="/">
            <img src="/Logo.png" width="170" height="60" style={{marginTop:"4px"}} alt="photoHeaderLogo"></img>
          </Link>
        </div>
        <nav className="col-md-12 col-lg-auto menu d-flex align-items-stretch flex-wrap flex-sm-nowrap flex-nowrap">
          <Link className="c-1 d-flex align-items-center" to={'/categories'}>
            <div className="d-flex flex-column text-center">
              <span>Categorías</span>
              <i className="icono fa fa-briefcase mt-1"></i>
            </div>
          </Link>
          <Link to={'/courses'} className="c-2 d-flex align-items-center">
            <div className="d-flex flex-column text-center">
              <span>Cursos</span>
              <i className="icono fa fa-folder-open mt-1"></i>
            </div>
          </Link>
          <button onClick={() => setActive(true)} className="c-3 border-0 d-flex align-items-center">
            <div className="d-flex flex-column align-items-center">
              {renderImageMenu()}
            </div>
          </button>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className={`col menu-principal ${active ? 'active' : ''}`}>
            <nav>
              {renderItemsMenu()}
            </nav>
          </div>
          <button onClick={() => setActive(false)} className={`col fondo-enlace ${active ? 'active' : ''}`}></button>
        </div>
      </div>
    </>
  );
};

export default Header;
