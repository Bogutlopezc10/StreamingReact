import React from 'react'
import QuestionList from '../../components/questions/QuestionList'
import {fetchQuestionsByCourseId} from '../../actions/question'
import {fetchOptions} from '../../actions/option'
import { connect } from 'react-redux';
import {getQuestionsByCourseId} from '../../selectors/index'

class QuestionListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchQuestionsByCourseId(this.props.id);
        this.props.fetchOptions();
    }
    render(){
        if(!this.props.questions){
            return(
                <div>Vacio.</div>
            )
        }
        return(
            <>  
                <QuestionList 
                    courseName = {this.props.courseName}
                    id = {this.props.id}
                    questions = {this.props.questions}
                    borderTopColor = {this.props.borderTopColor}
                    onClickEditQuestion={this.props.onClickEditQuestion}
                />
            </>
        )
    }
}


const mapStateToProps = (state, ownProps) =>{
    return { questions: getQuestionsByCourseId(state, ownProps.id) }
}

export default connect(mapStateToProps, {fetchQuestionsByCourseId, fetchOptions})(QuestionListContainer);