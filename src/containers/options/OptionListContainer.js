import React from 'react'
import OptionList from '../../components/options/OptionList'
import {fetchOptionsByQuestionId} from '../../actions/option'
import {connect} from 'react-redux'
import {getOptionsByQuestionId} from '../../selectors/index'

class OptionListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchOptionsByQuestionId(this.props.questionId);
    }
    render(){
        return(
            <>
                <OptionList 
                    courseName ={this.props.courseName}
                    courseId = {this.props.courseId}
                    options = {this.props.options}
                    questionId = {this.props.questionId}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        options: getOptionsByQuestionId(state,ownProps.questionId),
    }
}

export default connect(mapStateToProps, {fetchOptionsByQuestionId})(OptionListContainer);