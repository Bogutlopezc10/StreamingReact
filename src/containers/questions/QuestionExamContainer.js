import React from 'react'
import {connect} from 'react-redux'
import QuestionExam from '../../components/questions/QuestionExam'
import {fetchQuestionsExamByCourseId, nextQuestionExam} from '../../actions/question'
import {fetchOptionsExamByCourseId} from '../../actions/option'
import {getById} from '../../selectors/index'
import MainHeader from '../../components/MainHeader'
import {validateAnswersExam} from '../../actions/option'
import {fetchUserCourse} from '../../actions/userCourse'
import {unMountQuestionExam} from '../../actions/question'

class QuestionExamContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestionsExamByCourseId(this.props.courseId)
        this.props.fetchOptionsExamByCourseId(this.props.courseId)
        this.props.fetchUserCourse(this.props.userCourseId)
    }

    onSubmit = (answersExam, endExam)=>{
        if(endExam){
            const answersExamViewModel = {
                options: Object.values(answersExam),
                userCourseId: this.props.userCourseId
            }
            this.props.validateAnswersExam(answersExamViewModel, this.props.courseId, this.props.userCourseId);
        }
        else {
            this.props.nextQuestionExam();
        }
        
    }

    componentWillUnmount(){
        this.props.unMountQuestionExam();
    }

    render(){
        const{currentQuestionExam, currentNumberQuestion, userCourse, userCourseId, courseId} = this.props
        return(
           <>
            <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
            <QuestionExam
                courseId = {courseId}
                currentQuestionExam = {currentQuestionExam}
                currentNumberQuestion = {currentNumberQuestion}
                onSubmit = {this.onSubmit}
                userCourseId = {userCourseId}
                userCourse = {userCourse}
            />
           </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        currentQuestionExam: state.questions.currentQuestionExam,
        currentNumberQuestion: state.questions.currentNumberQuestion,
        userCourse: getById(state.userCourses.data, ownProps.userCourseId)
    }
}
export default connect(mapStateToProps,
{
    fetchQuestionsExamByCourseId,
    fetchOptionsExamByCourseId,
    validateAnswersExam,
    fetchUserCourse,
    unMountQuestionExam,
    nextQuestionExam
})
(QuestionExamContainer);