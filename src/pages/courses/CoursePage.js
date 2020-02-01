import React from 'react';
import CourseListContainer from '../../containers/courses/CourseListContainer';
import './CoursePage.css';

const CoursePage = () => {
    return(
        <div className="main-container">
            <CourseListContainer />
        </div>
    )
}

export default CoursePage;