import React from 'react'
import { connect } from 'react-redux';
import SubjectListPlayer from '../../components/player/SubjectListPlayer'
import { fetchSubjects } from '../../actions/subject';
import {fetchContents} from '../../actions/content'
import {getSubjectsByCourseId} from '../../selectors/index'

class SubjectListPlayerContainer extends React.Component{


    componentDidMount(){
        this.props.fetchSubjects(this.props.courseId)
        this.props.fetchContents();
    }
    render(){
        return(
            <SubjectListPlayer
                courseId = {this.props.courseId}
                subjects = {this.props.subjects}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { subjects: getSubjectsByCourseId(state, ownProps.courseId) }
}

export default connect(mapStateToProps, {fetchSubjects, fetchContents})(SubjectListPlayerContainer);