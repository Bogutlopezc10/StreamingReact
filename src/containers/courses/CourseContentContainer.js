import React from 'react';
import MainHeader from '../../components/MainHeader';
import SubjectListContainer from '../subjects/SubjectListContainer';
import SubjectCreateContainer from '../subjects/SubjectCreateContainer';

class CourseContentContainer extends React.Component{
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Contenido del curso" />
                <SubjectCreateContainer courseId={this.props.courseId} />
                <SubjectListContainer courseId={this.props.courseId} borderTopColor="#005385"/>
            </>
        )
    }
}

export default CourseContentContainer;