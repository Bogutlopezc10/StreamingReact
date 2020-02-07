import React from 'react'
import CoursePostContainer from '../../containers/courses/CoursePostContainer'

const CoursePostPage = (props) =>{

    
    return(
        <div>
            <CoursePostContainer courseId={props.match.params.id}/>
        </div>
    )
}

export default CoursePostPage;