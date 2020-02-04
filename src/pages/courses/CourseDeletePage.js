import React from 'react'
import CourseDeleteContainer from '../../containers/courses/CourseDeleteContainer'

const CourseDeletePage = (props) =>{

    
    return(
        <div className="main-container">

            <CourseDeleteContainer courseId={props.match.params.id}/>

        </div>
    )
}

export default CourseDeletePage;