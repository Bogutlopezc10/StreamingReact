import React from 'react'
import OptionDelete from '../../components/options/OptionDelete'
import {fetchQuestion} from '../../actions/question'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index'

class OptionDeleteContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestion(this.props.questionId)
    }
    render(){
        return(
            <OptionDelete 
                courseName={this.props.courseName}
                courseId = {this.props.courseId}
                questionId = {this.props.questionId}
                question = {this.props.question}
                backgroundHeaderColor="#005385"
            />
        )
    }
}

const mapToStateMapProps =(state, ownProps) =>{
    return {question:getById(state.questions.data,ownProps.questionId)}
}

export default connect(mapToStateMapProps, {fetchQuestion})(OptionDeleteContainer);