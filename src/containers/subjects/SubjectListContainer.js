import React from 'react';
import SubjectList from '../../components/subjects/SubjectList';
import { connect } from 'react-redux';
import { fetchSubjects, unMountSubjectsLoading } from '../../actions/subject';
import { unMountContent } from '../../actions/content';
import {fetchContents} from '../../actions/content'
import { getSubjectsByCourseId } from '../../selectors/index';

class SubjectListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchSubjects(this.props.courseId);
        this.props.fetchContents();
    }

    onClickUnMountContent = () => {
        this.props.unMountContent();
    }

    componentWillUnmount(){
        this.props.unMountSubjectsLoading();
    }
    render(){
        const { subjects, borderTopColor, courseId, courseName } = this.props;
        return (
            <> 
                <SubjectList 
                 subjects={subjects} 
                 onClickUnMountContent={this.onClickUnMountContent}
                 borderTopColor={borderTopColor} 
                 onClickEditSubject={this.props.onClickEditSubject}
                 courseName = {courseName}
                 courseId = {courseId}
                 loadingSubjects = {this.props.loadingSubjects}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        subjects: getSubjectsByCourseId(state, ownProps.courseId),
        loadingSubjects: state.subjects.isLoading
    }
}

export default connect(mapStateToProps,
{ 
    fetchSubjects, 
    fetchContents, 
    unMountContent,
    unMountSubjectsLoading
})(SubjectListContainer);