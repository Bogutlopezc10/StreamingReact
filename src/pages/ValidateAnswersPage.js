import React from 'react'
import ValidateAnswersContainer from '../containers/ValidateAnswersContainer'

const ValidateAnswersPage = (props) => {
    return(
        <div className="main-container">
           <ValidateAnswersContainer
                courseId = {props.match.params.courseId}
                userCourseId = {props.match.params.userCourseId}
            />
        </div>
    )
}

export default ValidateAnswersPage;