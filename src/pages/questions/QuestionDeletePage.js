import React from 'react'
import QuestionDeleteContainer from '../../containers/questions/QuestionDeleteContainer'


const QuestionDeletePage = (props) => {

    
    return(
        
        <QuestionDeleteContainer 
            questionId={props.match.params.questionId} 
            courseName = {props.match.params.CourseName}
            courseId ={props.match.params.id}
        />
    )
}


export default QuestionDeletePage;