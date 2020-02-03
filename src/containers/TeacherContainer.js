import React from 'react';
import CoursePublishedList from '../components/courses/CoursePublishedList';
import CourseNotPublishedList from '../components/courses/CourseNotPublishedList';
import MainHeader from '../components/MainHeader';
import { connect } from 'react-redux';
import {fetchCourseByUsername} from '../actions/course'
import { getCoursesPublishedByUser, getCoursesNotPublishedByUser } from '../selectors/index.js'
import { CURRENT_USER } from '../actions/types'

class TeacherContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourseByUsername(CURRENT_USER);
    }
    render(){
        if(!this.props.coursesPublished && !this.props.coursesNotPublished){
            return <>Vacio</>
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#2185d0" textHeader="Panel de control" />
                <CoursePublishedList 
                    courses={this.props.coursesPublished} 
                    borderTopColor="#2185d0" 
                    teacher={true}
                    customizeButton="teacher-button"
                />
                <CourseNotPublishedList
                    courses={this.props.coursesNotPublished} 
                    borderTopColor="#2185d0" 
                />
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return ({ 
            coursesPublished: getCoursesPublishedByUser(state),
            coursesNotPublished: getCoursesNotPublishedByUser(state) 
        })

}

export default connect(mapStateToProps, {fetchCourseByUsername})(TeacherContainer);