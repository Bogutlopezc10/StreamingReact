import React from 'react'
import CourseQuestionContainer from '../../containers/courses/CourseQuestionContainer'

const CourseQuestionPage = (props) =>{


    return(
        <>
            <div className = "main-container">
                <CourseQuestionContainer 
                    courseName = {props.match.params.CourseName}
                    id = {props.match.params.id}
                />
            </div>
        </>
    )
}

export default CourseQuestionPage;