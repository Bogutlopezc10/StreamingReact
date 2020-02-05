import React from 'react';
import MainHeader from '../../components/MainHeader';
import CoursePublishedList from '../../components/courses/CoursePublishedList';
import { fetchCourses } from '../../actions/course.js';
import { connect } from 'react-redux';
import { getCoursesPublished } from '../../selectors/index.js'

class CourseListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourses();
    }

    render(){
        if(!this.props.courses){
            return <>Vacio</>
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Cursos" />
                <CoursePublishedList 
                    courses={this.props.courses} 
                    borderTopColor="#005385" 
                    teacher={false}
                    customizeButton="course-button"
                />
            </>
        );
    }
}


const mapStateToProps = (state) => {
    //console.log(state);
    return { courses: getCoursesPublished(state) }
}


export default connect(mapStateToProps,{fetchCourses})(CourseListContainer);