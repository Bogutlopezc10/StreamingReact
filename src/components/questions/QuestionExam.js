import React from 'react'
import OptionExamListContainer from '../../containers/options/OptionExamListContainer'
import Spinner from '../Spinner';
import './Question.css'

class QuestionExam extends React.Component{

    renderData = () =>{
        const {currentQuestionExam, currentNumberQuestion, onSubmit, userCourse} = this.props;
        if(currentQuestionExam == null || !userCourse){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"273px"}}>
                        <div className="col-auto mb-4">
                            <Spinner />
                        </div>
                    </div>
                </>
            )
        }
        if(userCourse.correctAnswers >= 3 || !userCourse.isEnd){
            return (
                <>
                    <div>
                        <button className="btn btn-primary">Ir al Curso</button>
                    </div>
                </>
            )
        }
        return(
            <>
                <OptionExamListContainer
                    questionId ={currentQuestionExam.id}
                    numQuestion = {currentNumberQuestion}
                    currentQuestionExam = {currentQuestionExam}
                    currentNumberQuestion = {currentNumberQuestion}
                    onSubmit = {onSubmit}
                />
            </>
        )
    }
    render(){
        return(
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: "#005385" }}>
                        {this.renderData()}
                    </div>
                </div>
            </div>
           
        )
    }
}

export default QuestionExam;