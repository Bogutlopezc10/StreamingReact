import React from 'react'
import {fetchQuestion} from '../../actions/question'
import {fetchOptionsByQuestionId, unMountOptions} from '../../actions/option'
import {connect} from 'react-redux'
import MainHeader from '../../components/MainHeader'
import OptionEdit from '../../components/options/OptionEdit'
import {getOptionsByQuestionId} from '../../selectors/index'

class OptionEditContainer extends React.Component{

    componentDidMount(){
        this.props.fetchQuestion(this.props.questionId)
        this.props.fetchOptionsByQuestionId(this.props.questionId)
    }
    componentWillUnmount(){
        this.props.unMountOptions()
    }
    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Editar opciones" />
                <OptionEdit 
                    courseName={this.props.courseName}
                    courseId = {this.props.courseId}
                    questionId = {this.props.questionId}
                    optionsEdit = {this.props.options}
                    borderTopColor="#005385"
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

export default connect(mapStateToProps, {fetchQuestion, fetchOptionsByQuestionId, unMountOptions})(OptionEditContainer);