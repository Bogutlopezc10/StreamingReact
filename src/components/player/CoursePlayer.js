import React from 'react'
import CourseStarRating from './CourseStarRating';
import Moment from 'react-moment';
import 'moment-timezone';
import './Player.css'

class CoursePlayer extends React.Component{

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
                                <div className="col-lg-12">
                                    <h4>{course.courseName}</h4>
                                </div>
                                <div className="col-lg-12">
                                    <Moment format="DD/MM/YYYY">{course.updatedAt}</Moment>
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
                    <div className="row">
                        The rest..
                    </div>
                </div>
            </div>
        )
    }
}

export default CoursePlayer;