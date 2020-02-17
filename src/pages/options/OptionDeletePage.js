import React from 'react'
import OptionDeleteContainer from '../../containers/options/OptionDeleteContainer'

const OptionDeletePage = (props) =>{

    return(
        <>
            <OptionDeleteContainer
                courseName={props.match.params.courseName}
                courseId = {props.match.params.courseId}
                questionId = {props.match.params.questionId}
            />
        </>
    )
}

export default OptionDeletePage;