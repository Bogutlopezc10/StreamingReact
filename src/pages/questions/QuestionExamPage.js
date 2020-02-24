import React from 'react'
import QuestionExamContainer from '../../containers/questions/QuestionExamContainer'

const QuestionExamPage = (props) => {

    return(
        <div className="main-container">
            <QuestionExamContainer
                courseName = {props.match.params.courseName}
                courseId ={props.match.params.courseId}
            />
        </div>
    )
}

export default QuestionExamPage;