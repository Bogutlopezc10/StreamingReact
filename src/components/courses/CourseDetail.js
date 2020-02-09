import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './Course.css'

const CourseDetail = ({ course, borderTopColor }) => {
    const starPercentage = (course.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
        <>
            <div  style={{ borderTopColor: borderTopColor }} className="container course-shadow container-published p-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="container-img">
                                    <img src="/bg-home.jpg" className="img-fluid" alt="course-detail" />
                                    <div className="card-badge shadow rounded-right text-uppercase">{course.categoryName}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 container-info-course">
                        <div className="row">
                            <div className="course-detail col-lg-12">
                                <h3>{course.name}</h3>
                                <p>{course.description}</p>
                                <div className="col-lg-12 d-flex p-0 align-items-center justify-content-start">
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                    </div>
                                    <span className="number-rating ml-2 text-muted">{course.rating}</span>
                                </div>
                            </div>
                            <div className="col-lg-12 img-teacher mt-3 d-flex align-items-center justify-content-start">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="50" height="50" className="rounded-circle d-inline z-depth-0"
                                alt="avatar image"/>
                                <p className="d-inline text-muted ml-2">{`${course.nameTeacher} ${course.lastNameTeacher}`}</p>
                            </div>
                            <div className="col-lg-12 info-teacher mt-2">
                                <h6 className="d-inline">Contacto: </h6><p className="d-inline">{course.emailTeacher}</p> 
                            </div>
                            <div className="col-lg-12 info-teacher mt-2">
                                <h6 className="d-inline">Publicado: </h6><p className="d-inline"><Moment format="DD/MM/YYYY">{course.updatedAt}</Moment></p>
                            </div>
                            <div className="col-lg-12 mt-4">
                                <button className="btn btn-block btn-outline-success">
                                    <div>
                                        <p className="d-inline">MATRICULARME</p> 
                                        <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>              
            </div>
        </>
    );
}

export default CourseDetail;