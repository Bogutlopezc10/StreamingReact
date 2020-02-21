import React from 'react';
import { Link } from 'react-router-dom';

const UserCourse = ({ userCourse }) =>{
    const starPercentage = (userCourse.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    return (
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4">
            <Link to={`/Player/${userCourse.courseId}/${userCourse.id}`}>
                <div className="card card-usercourse">
                    <div className="row container-card">
                        <div className="col-6" style={{ paddingLeft: "0px" }}>
                            <img src="/bg-home.jpg" className="card-img" width="100" height="150" alt="bg-home" />
                        </div>
                        <div className="col-6 content-usercourse" style={{ paddingRight: "5px" }}>
                            <div className="row">
                                <h6>{userCourse.courseName}</h6>
                                <div className="col-lg-12 stars-usercourse d-flex align-items-center justify-content-center">
                                    <div className="stars-outer">
                                        <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                    </div>
                                    <span className="number-rating ml-2 text-muted">{userCourse.rating}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i className="far fa-play-circle"></i>
                    <div className="card-badge shadow rounded-right text-uppercase">{userCourse.categoryName}</div>
                    <div className="progress">
                        <div className="progress-bar" style={{ width:`${userCourse.progress}%`}}></div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default UserCourse;