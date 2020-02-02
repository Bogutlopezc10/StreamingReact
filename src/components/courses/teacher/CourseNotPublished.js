import React from 'react';
import { Link } from 'react-router-dom';
import '../CourseList.css';

const CourseNotPublished = ({ courses }) => {
    return (
        courses.map( course => {
            return(
                <div key={course.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
                    <div className="card shadow h-100">
                        <img src="/bg-home.jpg" className="card-img" width="150" height="150" alt="bg-home" />
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                        </div>
                        <div className="card-badge shadow rounded-right text-uppercase">{course.categoryName}</div>
                        <div className="row">
                            <div className="col-lg-12 py-0">
                                <Link to={`courses/`} className="btn btn-block teacher-button">
                                    <div>
                                    <p className="d-inline">EDITAR</p> 
                                        <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-12 py-0">
                                <Link to={`courses/`} className="btn btn-block teacher-button">
                                    <div>
                                        <p className="d-inline">AÑADIR TEMAS</p>
                                        <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-12 py-0">
                                <Link to={`courses/`} className="btn btn-block teacher-button">
                                    <div>
                                        <p className="d-inline">AÑADIR PREGUNTAS</p> 
                                        <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-lg-12 py-0">
                                <Link to={`courses/`} className="btn btn-block btn-outline-success">
                                    <div>
                                        <p className="d-inline">PUBLICAR</p> 
                                        <i className="d-inline fas fa-share ml-2 mt-2"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        })
    );
}

export default CourseNotPublished;