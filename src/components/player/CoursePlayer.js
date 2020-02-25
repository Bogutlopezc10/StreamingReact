import React from 'react'
import CourseStarRating from './CourseStarRating';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';
import './Player.css'

class CoursePlayer extends React.Component{

    renderButtonExam = () => {
        const { course, userCourseId, courseId} = this.props;
        if (course.isEnd){
            return (
                <>
                    <div className="row mt-3">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <span className="text-isEnd">¡Has terminado el curso!</span>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-center mt-2 mb-2">
                            <Link className="btn btn-outline-success" to={`/questions/exam/${courseId}/${userCourseId}`}>
                                <div>
                                    <p className="d-inline">REALIZAR EXAMEN</p> 
                                    <i className="d-inline fas fa-file-alt ml-2 mt-2"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <hr/>
                </>
            );
        }
    }

    render(){
        const { course, onClickUpdateRating } = this.props;
        if(!course){
            return <div className="col-lg-12">Cargando...</div>
        }
        return(
            <div className="col-lg-12">
                <div className="container container-course-player">
                    <div className="row pt-3 detail-course-player">
                        <div className="col-lg-5 mb-3">
                            <div className="row">
                                <div className="col-lg-12 mb-1">
                                    <h4>{course.courseName}</h4>
                                </div>
                                <div className="col-lg-12">
                                    <p>Publicado el <Moment format="DD/MM/YYYY">{course.coursePostedAt}</Moment></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-3">
                            <h6><strong>Progreso: </strong>{course.progress}%</h6>
                            <div className="progress" style={{ height: "18px"}}>
                                <div className="progress-bar" style={{ width:`${course.progress}%`}}></div>
                            </div>
                            
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <h6><strong>Tu calificación: </strong>{course.rating}/5</h6>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <CourseStarRating rating={course.rating} userCourseId={course.id} onClickUpdateRating={onClickUpdateRating}/>
                                </div>
                            </div>                        
                        </div>
                    </div>
                    {this.renderButtonExam()}
                    <div className="row mt-4 info-course-player">
                        <div className="col-lg-6">
                            <h2 className="d-flex justify-content-center">Información del curso</h2>
                            <hr/>
                            <div className="row mb-4">
                                <div className="col-lg-4 mt-1 mb-2 course-img-container">
                                    <img src="/bg-home.jpg" className="img-course-player" alt="bg-home" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-12">
                                           <span><strong>Descripción: </strong>{course.description}</span> 
                                        </div>
                                        <div className="col-lg-12">
                                           <span><strong>Categoría: </strong>{course.categoryName}</span> 
                                        </div>
                                        <div className="col-lg-12">
                                           <span><strong>Fecha en que te matriculaste: </strong><Moment format="DD/MM/YYYY">{course.createdAt}</Moment></span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                           <h2 className="d-flex justify-content-center">Contacto</h2> 
                           <hr/>
                           <div className="row">
                                <div className="col-lg-12 img-teacher mt-1 mb-3 d-flex align-items-center justify-content-center">
                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="50" height="50" className="rounded-circle d-inline z-depth-0"
                                    alt="avatar image"/>
                                    <p className="d-inline text-contact-teacher ml-3">{`${course.nameTeacher} ${course.lastNameTeacher}`}</p>
                                </div>
                                <div className="col-lg-12 mb-3 d-flex justify-content-center">
                                    <span><strong>Email: </strong>{course.emailTeacher}</span> 
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursePlayer;