import React from 'react'
import { connect } from 'react-redux';
import { isCreatingQuestion, isNotCreatingQuestion } from '../../actions/question';
import QuestionCreate from '../../components/questions/QuestionCreate'

class QuestionCreateContainer extends React.Component {

    onClickIsCreating = () => {
        this.props.isCreatingQuestion();
    }

    onClickIsNotCreating = () => {
        this.props.isNotCreatingQuestion();
    }
    render(){
        return(
            <> 
                <QuestionCreate
                courseId={this.props.id}
                isCreating={this.props.isCreating} 
                onClickIsCreating={this.onClickIsCreating} 
                onClickIsNotCreating={this.onClickIsNotCreating} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { isCreating: state.questions.isCreating }
}

export default connect(mapStateToProps, {isNotCreatingQuestion, isCreatingQuestion})(QuestionCreateContainer);