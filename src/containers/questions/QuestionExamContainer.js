import React from 'react'
import {connect} from 'react-redux'
import QuestionExam from '../../components/questions/QuestionExam'
import {fetchQuestionsExamByCourseId} from '../../actions/question'
import {getQuestionsByCourseId} from '../../selectors/index'
import MainHeader from '../../components/MainHeader'
import {validateAnswersExam} from '../../actions/option'

class QuestionExamContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestionsExamByCourseId(this.props.courseId)
    }

    onSubmit = (answersExam)=>{
        this.props.validateAnswersExam(answersExam);
    }
    render(){
        if(this.props.questions.length == 0){
            return(
                <div>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
                    <h1>Loading..............</h1>
                </div>
            )
        }
        return(
           <>
             <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
            <QuestionExam
                courseName ={this.props.courseName}
                courseId = {this.props.courseId}
                questions = {this.props.questions}
                onSubmit = {this.onSubmit}
            />
           </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { questions: getQuestionsByCourseId(state, ownProps.courseId) }
}
export default connect(mapStateToProps, {fetchQuestionsExamByCourseId, validateAnswersExam})(QuestionExamContainer);