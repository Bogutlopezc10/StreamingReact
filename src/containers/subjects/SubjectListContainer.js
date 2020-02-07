import React from 'react';
import SubjectList from '../../components/subjects/SubjectList';
import { connect } from 'react-redux';
import { fetchSubjects } from '../../actions/subject';
import { getSubjectsByCourseId } from '../../selectors/index';

class SubjectListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchSubjects(this.props.courseId);
    }

    render(){
        //console.log(CourseName)
        const { subjects, borderTopColor, courseId, CourseName } = this.props;
        if(!subjects){
            return <>Vacio</>
        }
        return (
            <> 
                <SubjectList 
                 subjects={subjects} 
                 borderTopColor={borderTopColor} 
                 onClickEditSubject={this.props.onClickEditSubject}
                 CourseName = {CourseName}
                 courseId = {courseId}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { subjects: getSubjectsByCourseId(state, ownProps.courseId) }
}

export default connect(mapStateToProps, { fetchSubjects })(SubjectListContainer);