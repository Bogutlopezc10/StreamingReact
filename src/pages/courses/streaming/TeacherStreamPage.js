import React from 'react'
import TeacherStreamContainer from '../../../containers/courses/streaming/TeacherStreamContainer'

const TeacherStreamPage = (props) =>{

    return(
        <div className="main-container">
           <TeacherStreamContainer
                courseId = {props.match.params.courseId}
            />
        </div>
    )
}

export default TeacherStreamPage;