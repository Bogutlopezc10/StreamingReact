import React from 'react';
import CoursePublished from '../components/courses/teacher/CoursePublished';
import CourseNotPublished from '../components/courses/teacher/CourseNotPublished';
import './TeacherContainer.css'
import { connect } from 'react-redux';
import {fetchCourseByUsername} from '../actions/course'
import { getCoursesPublishedByUser, getCoursesNotPublishedByUser } from '../selectors/index.js'
import { CURRENT_USER } from '../actions/types'

class TeacherContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourseByUsername(CURRENT_USER);
    }
    render(){
        if(!this.props.coursesPublished){
            return <>Vacio</>
        }
        return (
            <>
                <div className="teacher-title d-flex align-items-center justify-content-center mb-4">
                    <h1>Panel de control</h1>
                </div>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                            <h1 className="title-published">Mis cursos publicados</h1>
                        </div>
                    </div>
                </div>
                <div className="container container-teacher pt-4 px-4 mb-5 testimonial-group">
                    <div className="row">
                        <CoursePublished courses={this.props.coursesPublished}/>
                    </div>
                </div>
                <div className="container mb-3">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <h1 className="title-published">Mis cursos no publicados</h1>
                        </div>
                        <div className="col-auto btn-create">
                            <button className="btn btn-outline-success">
                                <div>
                                    <p className="d-inline">CREAR CURSO</p> 
                                    <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container container-teacher pt-4 px-4 mb-5 testimonial-group">
                    <div className="row">
                        <CourseNotPublished courses={this.props.coursesNotPublished}/>
                    </div>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return ({ 
            coursesPublished: getCoursesPublishedByUser(state),
            coursesNotPublished: getCoursesNotPublishedByUser(state) 
        })

}

export default connect(mapStateToProps, {fetchCourseByUsername})(TeacherContainer);