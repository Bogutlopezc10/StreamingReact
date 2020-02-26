import React from 'react'
import {connect} from 'react-redux'
import QuestionExam from '../../components/questions/QuestionExam'
import {fetchQuestionsExamByCourseId} from '../../actions/question'
import {getQuestionsExamByCourseId} from '../../selectors/index'
import MainHeader from '../../components/MainHeader'
import {validateAnswersExam} from '../../actions/option'

class QuestionExamContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestionsExamByCourseId(this.props.courseId)
    }

    onSubmit = (answersExam, courseId, userCourseId)=>{
        this.props.validateAnswersExam(answersExam, courseId, userCourseId);
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
                courseId = {this.props.courseId}
                questions = {this.props.questions}
                onSubmit = {this.onSubmit}
                userCourseId = {this.props.userCourseId}
            />
           </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { questions: getQuestionsExamByCourseId(state, ownProps.courseId) }
}
export default connect(mapStateToProps, {fetchQuestionsExamByCourseId, validateAnswersExam})(QuestionExamContainer);