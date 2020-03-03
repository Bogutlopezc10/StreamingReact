import React from 'react'
import {connect} from 'react-redux'
import QuestionExam from '../../components/questions/QuestionExam'
import {fetchQuestionsExamByCourseId, nextQuestionExam} from '../../actions/question'
import {fetchOptionsExamByCourseId} from '../../actions/option'
import {getById} from '../../selectors/index'
import MainHeader from '../../components/MainHeader'
import {validateAnswersExam} from '../../actions/option'
import {fetchUserCourse} from '../../actions/userCourse'
import history from '../../history'
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
        if(currentQuestionExam == null || !userCourse){
            return(
                <div>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
                    <h1>Loading..............</h1>
                </div>
            )
        }
        if(userCourse.correctAnswers >= 3 || !userCourse.isEnd){
            return (
                <>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
                    <div>
                        <button className="btn btn-primary">Ir al Curso</button>
                    </div>
                </>
            )
        }
        return(
           <>
            <MainHeader backgroundHeaderColor="#005385" textHeader="Examen del curso" />
            <QuestionExam
                courseId = {courseId}
                currentQuestionExam = {currentQuestionExam}
                currentNumberQuestion = {currentNumberQuestion}
                onSubmit = {this.onSubmit}
                userCourseId = {userCourseId}
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