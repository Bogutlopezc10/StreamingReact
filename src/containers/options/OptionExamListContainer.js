import React from 'react'
import OptionExamList from '../../components/options/OptionExamList'
import {getOptionsByQuestionId} from '../../selectors/index'
import {fetchOptionsByQuestionId} from '../../actions/option'
import {connect} from 'react-redux'

class OptionExamListContainer extends React.Component {

    componentDidMount(){
        this.props.fetchOptionsByQuestionId(this.props.questionId);
    }
    render(){
        if(this.props.options.length  == 0){
            return(
            <div>Loading..........</div>
            )
        }
        return(
            <OptionExamList
                options = {this.props.options}
                questionId = {this.props.questionId}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        options: getOptionsByQuestionId(state,ownProps.questionId),
    }
}

export default connect(mapStateToProps, {fetchOptionsByQuestionId})(OptionExamListContainer);