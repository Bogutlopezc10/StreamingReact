import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment'
import './Course.css';
import { FaChromecast } from 'react-icons/fa';

class CoursePublished extends React.Component{

    MaysFirst(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    renderTeacherExclusive = () => {
        const { course, teacher } = this.props;
        const starPercentage = (course.rating / 5) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        if(teacher){
            return(
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <div className="stars-outer">
                            <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                        </div>
                        <span className="number-rating ml-2 text-muted">{course.rating}</span>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <img src={course.photoTeacher} width="30" height="30" className="rounded-circle d-inline z-depth-0"
                        alt="photoTeacherCourse"/>
                        <p className="d-inline ml-2">{`${this.MaysFirst(course.nameTeacher)}`}</p>
                    </div>
                    <div className="col-lg-12 mt-2 d-flex align-items-center justify-content-center">
                        <div className="stars-outer">
                            <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                        </div>
                        <span className="number-rating ml-2 text-muted">{course.rating}</span>
                    </div>
                </div>
            )
        }
    }

    renderButtonQuestionTeacher = () => {
        const { course, teacher, customizeButton} = this.props;
        if(teacher){
            if(course.isStreaming){
                return(
                    <>
                        <Link to={`/courses/Detail/courseName/${course.id}`} className="btn teacher-button border-left-0 border-right-0 border-teacher">
                            <div>
                                <p className="d-inline">VER DETALLE</p> 
                                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                            </div>
                        </Link>
                        <Link to={`teacher/stream/${course.id}`} className="btn btn-outline-danger border-teacher border-left-0 border-right-0 border-top-0">
                            <div>
                                <p className="d-inline">DETENER</p>
                                <FaChromecast className="d-inline ml-2 mb-1" size={18} />
                            </div>
                        </Link>
                        <Link to={`/questions/courseName/${course.id}`} className="btn btn-danger btn-question-published">
                            <div>
                                <p>PREGUNTAS</p> 
                                <i className="fas fa-question mt-1 mb-1"></i>
                            </div>
                        </Link>
                    </>
                ) 
            }else{
                return(
                    <>
                        <Link to={`/courses/Detail/courseName/${course.id}`} className="btn teacher-button border-left-0 border-right-0 border-teacher">
                            <div>
                                <p className="d-inline">VER DETALLE</p> 
                                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                            </div>
                        </Link>
                        <Link to={`teacher/stream/${course.id}`} className="btn btn-outline-success border-teacher border-left-0 border-right-0 border-top-0">
                            <div>
                                <p className="d-inline">TRANSMITIR</p>
                                <FaChromecast className="d-inline ml-2 mb-1" size={18} />
                            </div>
                        </Link>
                        <Link to={`/questions/courseName/${course.id}`} className="btn btn-danger btn-question-published">
                            <div>
                                <p>PREGUNTAS</p> 
                                <i className="fas fa-question mt-1 mb-1"></i>
                            </div>
                        </Link>
                    </>
                )
            }
        }else{
            return(
                <>
                    <Link to={`/courses/Detail/courseName/${course.id}`} className={`btn ${customizeButton}`}>
                        <div>
                            <p className="d-inline">VER DETALLE</p> 
                            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                        </div>
                    </Link>
                </>
            )
        }
    }
    
    renderNewBadge = () => {
        const { course, teacher } = this.props;
        if(moment().diff(course.postedAt, 'days') <= 4 && !teacher){
            return (
                <div className="card-badge-new rounded-right text-uppercase">Nuevo</div>
            )
        }
    }

    render(){
        const { course } = this.props;
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
                <div className="card shadow-sm h-100">
                    <img src={`${course.photo}`} className="card-img" width="150" height="150" alt="bg-home" />
                    <div className="card-body">
                        <h5 className="card-title">{course.name}</h5>
                    </div>
                    <div className="card-footer">
                        {this.renderTeacherExclusive()}
                    </div>
                    <div className="card-badge rounded-right text-uppercase">{course.categoryName}</div>
                    {this.renderNewBadge()}
                    {this.renderButtonQuestionTeacher()}
                </div>
            </div>
        )
    }
};

export default CoursePublished;