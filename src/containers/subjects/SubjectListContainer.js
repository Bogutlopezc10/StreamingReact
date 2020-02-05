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
        const { subjects, borderTopColor } = this.props;
        if(!subjects){
            return <>Vacio</>
        }
        return (
            <> 
                <SubjectList subjects={subjects} borderTopColor={borderTopColor} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { subjects: getSubjectsByCourseId(state, ownProps.courseId) }
}

export default connect(mapStateToProps, { fetchSubjects })(SubjectListContainer);