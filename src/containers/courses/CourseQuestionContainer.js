import React from 'react'
import QuestionListContainer from '../../containers/questions/QuestionListContainer'
import QuestionCreateContainer from '../../containers/questions/QuestionCreateContainer'
import MainHeader from '../../components/MainHeader';
import { connect } from 'react-redux';
import QuestionEditContainer from '../../containers/questions/QuestionEditContainer'
import {fecthEditingQuestion, unMountQuestion, unMountCreateQuestionForm} from '../../actions/question'
import {scrollUp} from '../../scroll'

class CourseQuestionContainer extends React.Component {


    onClickEditQuestion = (questionId) => {
        this.props.unMountCreateQuestionForm()
        this.props.fecthEditingQuestion(questionId);
        scrollUp()
    }

    componentWillUnmount(){
        this.props.unMountQuestion()
    }

    render(){

        if (this.props.isEditing){
            
            return(
                <>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Preguntas del curso" />
                    <QuestionEditContainer />
                </>
            )
        }
        return(
            <>  
                <MainHeader backgroundHeaderColor="#005385" textHeader="Preguntas del curso" />
                <QuestionCreateContainer  id = {this.props.id}/>
                <QuestionListContainer 
                    courseName = {this.props.courseName}
                    id = {this.props.id}
                    borderTopColor="#005385"
                    onClickEditQuestion={this.onClickEditQuestion}
                />
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return { isEditing: state.questions.isEditing }
}


export default connect(mapStateToProps, {fecthEditingQuestion, unMountQuestion, unMountCreateQuestionForm})(CourseQuestionContainer);