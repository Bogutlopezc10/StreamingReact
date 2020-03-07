import React from 'react'
import OptionExamListContainer from '../../containers/options/OptionExamListContainer'
import Spinner from '../Spinner';
import {Link} from 'react-router-dom';
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
                    <div className="row" style={{height:"273px"}}>
                        <div className="col-lg-12 d-flex align-items-center justify-content-center">
                            <img src="/ordenador.png" style={{ height: "140px", width: "140px"}} alt="caja" />
                        </div>
                        <div className="col-lg-12 d-flex align-items-center justify-content-center" style={{marginTop:"-22px"}}>
                            <h5 className="access-denied"><strong>¡Acceso denegado! </strong>La página que solicitaste no esta disponible.</h5>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <Link to="/" className="btn course-button" style={{marginTop:"-20px"}}>
                                <div>
                                    <p className="d-inline">IR A HOME</p> 
                                    <i className="d-inline fas fa-home ml-2 mt-2"></i>
                                </div>
                            </Link>
                        </div>
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