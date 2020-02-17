import React from 'react'
import OptionEditContainer from '../../containers/options/OptionEditContainer'

const OptionEditPage = (props) => {
    return(
        <div className="main-container">
            <OptionEditContainer 
                courseName={props.match.params.courseName}
                courseId = {props.match.params.courseId}
                questionId = {props.match.params.questionId}
            />
        </div>
    )
}

export default OptionEditPage;