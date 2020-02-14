import React from 'react';
import SubjectList from '../../components/subjects/SubjectList';
import { connect } from 'react-redux';
import { fetchSubjects } from '../../actions/subject';
import { unMountContent } from '../../actions/content';
import { getSubjectsByCourseId } from '../../selectors/index';

class SubjectListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchSubjects(this.props.courseId);
    }

    onClickUnMountContent = () => {
        this.props.unMountContent();
    }

    render(){
        const { subjects, borderTopColor, courseId, courseName } = this.props;
        if(!subjects){
            return <>Vacio</>
        }
        return (
            <> 
                <SubjectList 
                 subjects={subjects} 
                 onClickUnMountContent={this.onClickUnMountContent}
                 borderTopColor={borderTopColor} 
                 onClickEditSubject={this.props.onClickEditSubject}
                 courseName = {courseName}
                 courseId = {courseId}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { subjects: getSubjectsByCourseId(state, ownProps.courseId) }
}

export default connect(mapStateToProps, { fetchSubjects, unMountContent })(SubjectListContainer);