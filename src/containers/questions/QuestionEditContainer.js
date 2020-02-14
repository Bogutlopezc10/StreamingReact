import React from 'react'
import {isNotEditingQuestion} from '../../actions/question'
import { connect } from 'react-redux';
import QuestionEdit from '../../components/questions/QuestionEdit'

class QuestionEditContainer extends React.Component {

    onClickIsNotEditing = () => {
        this.props.isNotEditingQuestion();
    }
    render(){
        return(
            <>
                <QuestionEdit 
                    onClickIsNotEditing={this.onClickIsNotEditing} 
                    currentQuestion={this.props.currentQuestion} 
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { currentQuestion: state.questions.currentQuestion }
}


export default connect(mapStateToProps,{isNotEditingQuestion})(QuestionEditContainer);