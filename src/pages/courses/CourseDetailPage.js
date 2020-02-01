import React from 'react';
import CourseDetailContainer from '../../containers/courses/CourseDetailContainer';
import './CoursePage.css'

const CourseDetailPage = (props) => {
    return(
        <div className="main-container">
            <CourseDetailContainer courseId={props.match.params.id}/>
        </div>
    )
}

export default CourseDetailPage;