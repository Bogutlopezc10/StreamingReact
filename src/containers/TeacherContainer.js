import React from 'react';
import CoursePublished from '../components/courses/teacher/CoursePublished';
import { connect } from 'react-redux';

class TeacherContainer extends React.Component{
    render(){
        return (
            <div>
                <CoursePublished />
            </div>
        )
    }
}

export default TeacherContainer;