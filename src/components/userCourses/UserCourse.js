import React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

class UserCourse extends React.Component{
    renderCertificated = () =>{
        const { userCourse } = this.props;
        if(userCourse.isEnd){
            if (userCourse.correctAnswers >= 3){
                return(
                    <i className="icon-success-usercourse fas fa-graduation-cap"></i>
                );
            }else{
                return(
                    <i className="icon-wrong-usercourse fas fa-graduation-cap"></i>
                );
            }
        }
    }

    render(){
        const { userCourse } = this.props;
        const starPercentage = (userCourse.rating / 5) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        return (
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4">
                <Link to={`/Player/${userCourse.courseId}/${userCourse.id}`}>
                    <div className="card card-usercourse">
                        <div className="row container-card">
                            <div className="col-6" style={{ paddingLeft: "0px" }}>
                                <img src={`${userCourse.photo}`} className="card-img" width="100" height="150" alt="bg-home" />
                            </div>
                            <div className="col-6 content-usercourse" style={{ paddingRight: "5px" }}>
                                <div className="row">
                                    <div className="col-lg-12 mt-2 pl-0">
                                        <span>Te matriculaste el <Moment format="DD/MM/YYYY">{userCourse.createdAt}</Moment></span> 
                                    </div>
                                    <div className="col-lg-12 mt-3 pl-0">
                                        <h6>{userCourse.courseName}</h6>
                                    </div>
                                    <div className="col-lg-12 stars-usercourse d-flex align-items-center justify-content-center">
                                        <div className="stars-outer">
                                            <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                        </div>
                                        <span className="number-rating ml-2 text-muted">{userCourse.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <i className="icon-play-usercourse far fa-play-circle"></i>
                        <div className="card-badge shadow rounded-right text-uppercase">{userCourse.categoryName}</div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width:`${userCourse.progress}%`}}></div>
                        </div>
                        {this.renderCertificated()}
                    </div>
                </Link>
            </div>
        );
    }
}

export default UserCourse;