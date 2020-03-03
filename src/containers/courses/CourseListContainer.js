import React from 'react';
import MainHeader from '../../components/MainHeader';
import CoursePublishedList from '../../components/courses/CoursePublishedList';
import { fetchCourses, unMountLoadingCourse } from '../../actions/course.js';
import { connect } from 'react-redux';
import { getCoursesPublished } from '../../selectors/index.js'

class CourseListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourses();
    }
    
    componentWillUnmount(){
        this.props.unMountLoadingCourse()
    }
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Cursos" />
                <CoursePublishedList 
                    courses={this.props.courses} 
                    borderTopColor="#005385" 
                    teacher={false}
                    customizeButton="course-button"
                    loadingCourse = {this.props.loadingCourse}
                />
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return { 
        courses: getCoursesPublished(state),
        loadingCourse: state.courses.isLoading
    }
}


export default connect(mapStateToProps,{fetchCourses, unMountLoadingCourse})(CourseListContainer);