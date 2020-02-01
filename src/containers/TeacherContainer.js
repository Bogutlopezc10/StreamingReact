import React from 'react';
import CoursePublished from '../components/courses/teacher/CoursePublished';
import './TeacherContainer.css'
import { connect } from 'react-redux';
import {fetchCourseByUsername} from '../actions/course'
import { getCoursesPublishedByUser } from '../selectors/index.js'

class TeacherContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourseByUsername("Mr. Sample");
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
                <div className="container mb-2">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                            <h1 className="title-published">Mis cursos publicados</h1>
                        </div>
                    </div>
                </div>
                <div className="container container-teacher pt-4 px-4 mb-5 testimonial-group">
                    <div className="row text-center">
                        <CoursePublished courses={this.props.coursesPublished}/>
                    </div>
                </div>
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return { coursesPublished: getCoursesPublishedByUser(state) }

}

export default connect(mapStateToProps, {fetchCourseByUsername})(TeacherContainer);