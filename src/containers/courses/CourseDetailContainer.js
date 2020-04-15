import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import MainHeader from '../../components/MainHeader';
import {fetchCourse, unMountDetailCourse} from '../../actions/course';
import {createUserCourse, fetchUserCoursesByUserName} from '../../actions/userCourse'
import {IsAdmin, IsTeacher} from '../../selectors/authSelectors';
import {getById, getUserCoursesByUser} from '../../selectors/index';

class CourseDetailContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId); 
        this.props.fetchUserCoursesByUserName();
    }
    
    componentWillUnmount(){
        this.props.unMountDetailCourse();
    }

    onClickCreateUserCourse = (courseId) =>{
        this.props.createUserCourse(courseId)
    }

    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Detalle del curso" />
                <CourseDetail 
                    course={this.props.course}
                    userCourses = {this.props.userCourses}
                    borderTopColor="#005385"
                    onClickCreateUserCourse={this.onClickCreateUserCourse}
                    loadingUserCourse = {this.props.loadingUserCourse}
                    isAdmin = {this.props.isAdmin}
                    isTeacher = {this.props.isTeacher}
                />
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{
    return {
         course: getById(state.courses.data,ownProps.courseId),
         userCourses: getUserCoursesByUser(state),
         errorUserCourse:state.userCourses.isError,
         loadingUserCourse: state.userCourses.isLoading,
         isAdmin: IsAdmin(state),
         isTeacher: IsTeacher(state),
    }
}

export default connect(mapStateToProps,
    {
        fetchCourse,
        createUserCourse,
        fetchUserCoursesByUserName,
        unMountDetailCourse
    })(CourseDetailContainer);
