import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
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
                <a href="#" className="c-3 border-2 d-flex align-items-center dropdown" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <div className="d-flex flex-column align-items-center">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="60" height="60" style={{ border: "1px solid gray"}} className="rounded-circle shadow z-depth-0"
                        alt="avatar image"/>
                    </div>
                </a>
                <div className="dropdown-menu dropdown-menu-lg-left bg-dropdown mt-0"
                    aria-labelledby="navbarDropdownMenuLink-55">
                    <Link className="dropdown-item" to="/teacher">
                        Panel de control
                    </Link>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;