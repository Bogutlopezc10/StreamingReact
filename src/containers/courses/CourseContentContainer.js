import React from 'react';
import { connect } from 'react-redux';
import { fecthEditingSubject, unMountCreateForm } from '../../actions/subject';
import { unMountCourseContent } from '../../actions/course';
import MainHeader from '../../components/MainHeader';
import SubjectListContainer from '../subjects/SubjectListContainer';
import SubjectCreateContainer from '../subjects/SubjectCreateContainer';
import SubjectEditContainer from '../subjects/SubjectEditContainer';
import {scrollUp} from '../../scroll'


class CourseContentContainer extends React.Component{

    onClickEditSubject = (subjectId) => {
        this.props.unMountCreateForm();
        this.props.fecthEditingSubject(subjectId);
        scrollUp()
    }

    componentWillUnmount(){
        this.props.unMountCourseContent();
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
                <SubjectListContainer
                    onClickEditSubject={this.onClickEditSubject}
                    courseId={this.props.courseId} 
                    borderTopColor="#005385"
                    courseName = {this.props.courseName}
                 />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { isEditing: state.subjects.isEditing }
}

export default connect(mapStateToProps, { fecthEditingSubject, unMountCreateForm, unMountCourseContent })(CourseContentContainer);