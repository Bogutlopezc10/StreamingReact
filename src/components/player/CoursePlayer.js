import React from 'react'
import CourseStarRating from './CourseStarRating';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Spinner from '../Spinner';
import 'moment-timezone';
import './Player.css'
import CreatePdf from '../CreatePdf'
import { FaChromecast } from 'react-icons/fa';

class CoursePlayer extends React.Component {

    MaysFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    renderCourseName = () =>{
        const { course } = this.props;
        if(course.isStreaming){
            return(
                <>
                    <h4 className="d-inline">{course.courseName}</h4>
                    <Link className="d-inline ml-3 course-live" to={`/stream/streamShow/${course.courseId}`}>EN VIVO <FaChromecast className="course-live-icon" size={15} /></Link>
                </>
            )
        }else{
            return(
                <>
                    <h4>{course.courseName}</h4>
                </>
            )
        }
        
    }

    renderMessage = () => {
        const { course, userCourseId, courseId } = this.props;
        if (course.correctAnswers >= 3) {
            return (
                <>
                    <div className="col-lg-12 d-flex justify-content-center">
                        <span className="text-isEnd d-inline">!Felicitaciones! Aprobaste el curso</span>
                        <i className="icon-success d-inline ml-2 mt-2 far fa-check-circle"></i>
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center mt-2 mb-2">
                        <CreatePdf course={course} />
                    </div>
                </>
            );
        } else {
            return (
                <>
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
                </>
            );
        }
    }

    renderButtonExam = () => {
        const { course } = this.props;
        if (course.isEnd) {
            return (
                <>
                    <div className="row mt-3">
                        {this.renderMessage()}
                    </div>
                    <hr />
                </>
            );
        }
    }

    render() {
        const { course, onClickUpdateRating } = this.props;
        if (!course) {
            return (
                <div className="col-lg-12">
                    <div className="container container-course-player">
                        <div className="row d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
                            <div className="col-auto">
                                <Spinner />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="col-lg-12">
                <div className="container container-course-player">
                    <div className="row pt-3 detail-course-player">
                        <div className="col-lg-5 mb-3">
                            <div className="row">
                                <div className="col-lg-12 mb-1">
                                    {this.renderCourseName()}
                                </div>
                                <div className="col-lg-12">
                                    <p>Publicado el <Moment format="DD/MM/YYYY">{course.coursePostedAt}</Moment></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-3">
                            <h6><strong>Progreso: </strong>{course.progress}%</h6>
                            <div className="progress" style={{ height: "18px" }}>
                                <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 mb-3">
                            <div className="row">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <h6><strong>Tu calificación: </strong>{course.rating}/5</h6>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <CourseStarRating rating={course.rating} userCourseId={course.id} onClickUpdateRating={onClickUpdateRating} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.renderButtonExam()}
                    <div className="row mt-4 info-course-player">
                        <div className="col-lg-6">
                            <h2 className="d-flex justify-content-center">Información del curso</h2>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-lg-4 mt-1 mb-2 course-img-container">
                                    <img src={`${course.photo}`} className="img-course-player" alt="bg-home" />
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
                                        <div className="col-lg-12">
                                            <span><strong>Estudiantes matriculados: </strong>{course.enrolledStudents}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="d-flex justify-content-center">Contacto</h2>
                            <hr />
                            <div className="row">
                                <div className="col-lg-12 img-teacher mt-1 mb-3 d-flex align-items-center justify-content-center">
                                    <img src={course.photoTeacher} width="50" height="50" className="rounded-circle d-inline z-depth-0"
                                        alt="photoTeacherCoursePlayer" />
                                    <p className="d-inline text-contact-teacher ml-3">{`${this.MaysFirst(course.nameTeacher)} `}</p>
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