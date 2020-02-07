import React from 'react';
import { connect } from 'react-redux';
import { fecthEditingSubject } from '../../actions/subject';
import MainHeader from '../../components/MainHeader';
import SubjectListContainer from '../subjects/SubjectListContainer';
import SubjectCreateContainer from '../subjects/SubjectCreateContainer';
import SubjectEditContainer from '../subjects/SubjectEditContainer';


class CourseContentContainer extends React.Component{
    onClickEditSubject = (subjectId) => {
        this.props.fecthEditingSubject(subjectId);
    }

    render(){
        if(this.props.isEditing){
            return (
                <>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Contenido del curso" />
                    <SubjectEditContainer />
                </>
            )
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Contenido del curso" />
                <SubjectCreateContainer courseId={this.props.courseId} />
                <SubjectListContainer onClickEditSubject={this.onClickEditSubject} courseId={this.props.courseId} borderTopColor="#005385"/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { isEditing: state.subjects.isEditing }
}

export default connect(mapStateToProps, { fecthEditingSubject })(CourseContentContainer);