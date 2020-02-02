import React from 'react';
import { Link } from 'react-router-dom';
import '../CourseList.css'

const CoursePublished = ({ courses }) => {
    return (
        courses.map( course => {
            const starPercentage = (course.rating / 5) * 100;
            const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
            return(
                <div key={course.id} className="col-lg-3 mb-4">
                    <div className="card shadow h-100">
                        <img src="/bg-home.jpg" className="card-img" width="150" height="150" alt="bg-home" />
                        <div className="card-body">
                            <h5 className="card-title">{course.name}</h5>
                        </div>
                        <div className="card-footer">
                            <div className="row">
                                <div className="col-lg-12 d-flex align-items-center justify-content-center">
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                    </div>
                                    <span className="number-rating ml-2 text-muted">{course.rating}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-badge shadow rounded-right text-uppercase">{course.categoryName}</div>
                        <Link to={`courses/`} className="btn course-button">
                            <div>
                                <p className="d-inline">VER DETALLE</p> 
                                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            )
        })
    );
}

export default CoursePublished;