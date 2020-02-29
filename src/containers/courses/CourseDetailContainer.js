import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import MainHeader from '../../components/MainHeader';
import {fetchCourse} from '../../actions/course';
import {createUserCourse, fetchUserCoursesByUserName} from '../../actions/userCourse'
import {getById, getUserCoursesByUser} from '../../selectors/index';
import {unMountUserCourse} from '../../actions/userCourse'

class CourseDetailContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId); 
        this.props.fetchUserCoursesByUserName();
    }
    
    componentWillUnmount(){
        this.props.unMountUserCourse();
    }

    onClickCreateUserCourse = (courseId) =>{
        this.props.createUserCourse(courseId)
    }

    render(){
        console.log(this.props.userCourses)
        if(!this.props.course || !this.props.userCourses){
            return (
                <>
                    <MainHeader backgroundHeaderColor="#005385" textHeader="Detalle del curso" />
                </>
            )
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Detalle del curso" />
                <CourseDetail 
                    course={this.props.course}
                    userCourses = {this.props.userCourses}
                    borderTopColor="#005385"
                    onClickCreateUserCourse={this.onClickCreateUserCourse}
                />
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{
    return {
         course: getById(state.courses.data,ownProps.courseId),
         userCourses: getUserCoursesByUser(state),
         errorUserCourse:state.userCourses.isError
    }
}

export default connect(mapStateToProps,
    {
        fetchCourse,
        createUserCourse,
        unMountUserCourse,
        fetchUserCoursesByUserName
    })(CourseDetailContainer);