import React from 'react';
import CoursePublished from '../components/courses/teacher/CoursePublished';
import './TeacherContainer.css'
import { connect } from 'react-redux';

class TeacherContainer extends React.Component{
    render(){
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
                        <CoursePublished />
                    </div>
                </div>
            </>
        );
    }
}

export default TeacherContainer;