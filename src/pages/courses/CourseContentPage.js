import React from 'react';
import CourseContentContainer from '../../containers/courses/CourseContentContainer';
import './CoursePage.css';

const CourseContentPage = (props) => {
    return(
        <div className="main-container">
            <CourseContentContainer courseId={props.match.params.id} />
        </div>
    )
}

export default CourseContentPage;