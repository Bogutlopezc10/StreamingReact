import React from 'react';
import CourseContentContainer from '../../containers/courses/CourseContentContainer';
import './CoursePage.css';

const CourseContentPage = (props) => {
    return(
        <div className="main-container">
            <CourseContentContainer
             courseId={props.match.params.id}
             courseName = {props.match.params.CourseName}
            />
        </div>
    )
}

export default CourseContentPage;