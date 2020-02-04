import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const CourseNotPublished = ({ course }) => {
    return(
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
            <div className="card shadow h-100">
                <img src="/bg-home.jpg" className="card-img" width="150" height="150" alt="bg-home" />
                <div className="card-body">
                    <h5 className="card-title">{course.name}</h5>
                </div>
                <div className="card-badge shadow rounded-right text-uppercase">{course.categoryName}</div>
                <div className="row">
                    <div className="col-lg-12 py-0">
                        <Link to={`courses/Edit/${course.name}/${course.id}`} className="btn btn-block teacher-button border-left-0 border-right-0 border-teacher">
                            <div>
                            <p className="d-inline">EDITAR</p> 
                                <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-12 py-0">
                        <Link to={`/courses/Delete/${course.name}/${course.id}`} className="btn btn-block btn-outline-danger border-teacher border-0">
                            <div>
                                <p className="d-inline">ELIMINAR</p>
                                <i className="d-inline fas fa-trash-alt ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-12 py-0">
                        <Link to={`courses/`} className="btn btn-block btn-outline-success border-left-0 border-right-0 border-teacher">
                            <div>
                                <p className="d-inline">PUBLICAR</p> 
                                <i className="d-inline fas fa-share ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                <Link className="btn btn-success btn-subject">
                    <div>
                        <p>TEMAS</p> 
                        <i className="fas fa-file-alt mt-1 mb-1"></i>
                    </div>
                </Link>
                <Link className="btn btn-danger btn-question">
                    <div>
                        <p>PREGUNTAS</p> 
                        <i className="fas fa-question mt-1 mb-1"></i>
                    </div>
                </Link>
            </div> 
        </div>
    )
}

export default CourseNotPublished;