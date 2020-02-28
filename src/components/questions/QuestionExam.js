import React from 'react'
import OptionExamListContainer from '../../containers/options/OptionExamListContainer'
import './Question.css'

class QuestionExam extends React.Component{
    render(){
        const {currentQuestionExam, currentNumberQuestion, onSubmit} = this.props;
        return(
            <OptionExamListContainer
                questionId ={currentQuestionExam.id}
                numQuestion = {currentNumberQuestion}
                currentQuestionExam = {currentQuestionExam}
                currentNumberQuestion = {currentNumberQuestion}
                onSubmit = {onSubmit}
            />
        )
    }
}

export default QuestionExam;