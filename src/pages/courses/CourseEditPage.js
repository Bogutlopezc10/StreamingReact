import React from 'react'
import CourseEditContainer from '../../containers/courses/CourseEditContainer'

const CourseEditPage = (props) =>{
    return(
        <div className="main-container">
            <CourseEditContainer courseId={props.match.params.id}/>
        </div>
    )
}

export default CourseEditPage;