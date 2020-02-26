import React from 'react'
import {connect} from 'react-redux'
import QuestionExam from '../../components/questions/QuestionExam'
import {fetchQuestionsExamByCourseId} from '../../actions/question'
import {getQuestionsExamByCourseId, getById} from '../../selectors/index'
import MainHeader from '../../components/MainHeader'
import {validateAnswersExam} from '../../actions/option'
import {fetchUserCourse} from '../../actions/userCourse'
import history from '../../history'
import {unMountQuestionExam} from '../../actions/question'

class QuestionExamContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestionsExamByCourseId(this.props.courseId)
        this.props.fetchUserCourse(this.props.userCourseId)
    }

    onSubmit = (answersExam, courseId, userCourseId)=>{
        this.props.validateAnswersExam(answersExam, courseId, userCourseId);
    }

    componentWillUnmount(){
        this.props.unMountQuestionExam();
    }
    render(){
        const{questions, userCourse, userCourseId, courseId} = this.props
        console.log(questions);
        if(questions.length == 0 || !userCourse){
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
                courseId = {courseId}
                questions = {questions}
                onSubmit = {this.onSubmit}
                userCourseId = {userCourseId}
            />
           </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        questions: getQuestionsExamByCourseId(state, ownProps.courseId),
        userCourse: getById(state.userCourses.data, ownProps.userCourseId)
    }
}
export default connect(mapStateToProps,
    {
        fetchQuestionsExamByCourseId,
        validateAnswersExam,
        fetchUserCourse,
        unMountQuestionExam
    })
     (QuestionExamContainer);