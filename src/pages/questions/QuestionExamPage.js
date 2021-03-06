import React from 'react'
import QuestionExamContainer from '../../containers/questions/QuestionExamContainer'

const QuestionExamPage = (props) => {

    return(
        <div className="main-container">
            <QuestionExamContainer
                courseId = {props.match.params.courseId}
                userCourseId = {props.match.params.userCourseId}
            />
        </div>
    )
}

export default QuestionExamPage;