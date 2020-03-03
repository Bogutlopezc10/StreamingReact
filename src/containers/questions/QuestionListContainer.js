import React from 'react'
import QuestionList from '../../components/questions/QuestionList'
import {fetchQuestionsByCourseId, UnmountQuestionsLoading} from '../../actions/question'
import {fetchOptions, fetchOptionsExamByCourseId} from '../../actions/option'
import { connect } from 'react-redux';
import {getQuestionsByCourseId} from '../../selectors/index'

class QuestionListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchQuestionsByCourseId(this.props.id);
        this.props.fetchOptionsExamByCourseId(this.props.id);
    }
    
    componentWillUnmount(){
        this.props.UnmountQuestionsLoading();
    }
    render(){
        return(
            <>  
                <QuestionList 
                    courseName = {this.props.courseName}
                    id = {this.props.id}
                    questions = {this.props.questions}
                    borderTopColor = {this.props.borderTopColor}
                    onClickEditQuestion={this.props.onClickEditQuestion}
                    loadingQuestions = {this.props.loadingQuestions}
                />
            </>
        )
    }
}


const mapStateToProps = (state, ownProps) =>{
    return { 
        questions: getQuestionsByCourseId(state, ownProps.id),
        loadingQuestions: state.questions.isLoading
    }
}

export default connect(mapStateToProps, 
{
    fetchQuestionsByCourseId, 
    fetchOptions, 
    UnmountQuestionsLoading,
    fetchOptionsExamByCourseId
})(QuestionListContainer);