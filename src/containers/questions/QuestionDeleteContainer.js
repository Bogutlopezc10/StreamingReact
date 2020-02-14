import React from 'react'
import QuestionDelete from '../../components/questions/QuestionDelete'
import {fetchQuestion} from '../../actions/question'
import {getById} from '../../selectors/index';
import {scrollUp} from '../../scroll'
import {connect} from 'react-redux'

class QuestionDeleteContainer extends React.Component {

    componentDidMount(){
        this.props.fetchQuestion(this.props.questionId)
        scrollUp()
    }
    render(){
        return(
            <>
                <QuestionDelete
                     questionId={this.props.questionId} 
                     courseName = {this.props.courseName}
                     courseId ={this.props.courseId}
                     question ={this.props.question}
                     backgroundHeaderColor="#005385"
                />
            </>
        )
    }
}


const mapToStateMapProps =(state, ownProps) =>{
    return {question:getById(state.questions.data,ownProps.questionId)}
}

export default connect(mapToStateMapProps, {fetchQuestion})(QuestionDeleteContainer);