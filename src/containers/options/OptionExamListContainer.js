import React from 'react'
import OptionExamList from '../../components/options/OptionExamList'
import {getOptionsByQuestionId} from '../../selectors/index'
import {connect} from 'react-redux'

class OptionExamListContainer extends React.Component {

    render(){
        return(
            <OptionExamList
                options = {this.props.options}
                currentQuestionExam = {this.props.currentQuestionExam}
                currentNumberQuestion = {this.props.currentNumberQuestion}
                onSubmit = {this.props.onSubmit}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        options: getOptionsByQuestionId(state,ownProps.questionId),
    }
}

export default connect(mapStateToProps, null)(OptionExamListContainer);