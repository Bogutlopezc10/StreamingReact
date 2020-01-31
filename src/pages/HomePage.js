import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return (
            <>
                {/* Container main image */}
                <div className="container-home">
                    <img className="img-fluid bg-home" src="/bg-home.jpg" alt="bg-home" />
                    <div className="text-home">
                        <p>La plataforma más moderna del mercado comprometida con el mejoramiento académico.</p>
                    </div>
                </div>
                {/* Container category home */}
                <div className="container-category">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 title mt-4">
                                <h2>Categorias</h2>
                            </div>
                            <div className="col-12 text mt-4">
                                <p>En esta sección encontraras categorias</p>
                            </div>
                        </div>
                        <div className="row mt-4 mb-5">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fa fa-gamepad mt-1 mb-2"></i>
                                    <h3>Videojuegos</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fa fa-laptop mt-1 mb-2"></i>
                                    <h3>Desarrollo Web</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fa fa-mobile mt-1 mb-2"></i>
                                    <h3>Desarrollo Móvil</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-4 offset-4 d-flex button justify-content-center">
                                <Link to={'/categories'}>
                                    <i className="fa fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container course home */}
                <div className="container-course">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 title mt-4">
                                <h2>Cursos</h2>
                            </div>
                            <div className="col-12 text mt-4">
                                <p>En esta sección encontraras cursos</p>
                            </div>
                        </div>
                        <div className="row mt-4 mb-5">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fa fa-code mt-1 mb-2"></i>
                                    <h3>HTML</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fab fa-css3-alt mt-1 mb-2"></i>
                                    <h3>CSS3</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="d-flex flex-column main align-items-center">
                                    <i className="fab fa-react mt-1 mb-2"></i>
                                    <h3>ReactJS</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-4 offset-4 d-flex button justify-content-center">
                                <Link to={'/courses'}>
                                    <i className="fa fa-arrow-circle-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default HomePage;