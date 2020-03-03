import React from 'react';
import CoursePublishedList from '../components/courses/CoursePublishedList';
import CourseNotPublishedList from '../components/courses/CourseNotPublishedList';
import MainHeader from '../components/MainHeader';
import { connect } from 'react-redux';
import {fetchCourseByUsername, unMountLoadingCourse} from '../actions/course'
import { getCoursesPublishedByUser, getCoursesNotPublishedByUser } from '../selectors/index.js'
import { CURRENT_USER } from '../actions/types'
import {updateSuccessUnmount} from '../actions/success'
import Success from '../components/Success'

class TeacherContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourseByUsername(CURRENT_USER);

        this.timerID = setTimeout(
            () => this.props.updateSuccessUnmount(),
            3000
        );
    }
    componentWillUnmount(){
        clearTimeout(this.timerID);
        this.props.updateSuccessUnmount();
        this.props.unMountLoadingCourse();
    }

    renderMessage(){
        if(this.props.error){
            return(
                <>
                 <Success message={this.props.message}/>
                </>
            )
        }
    }
    render(){
        return (
            <>  
                <MainHeader backgroundHeaderColor="#005385" textHeader="Panel de control" />
                {this.renderMessage()}
                <CoursePublishedList 
                    courses={this.props.coursesPublished} 
                    borderTopColor="#2185d0" 
                    teacher={true}
                    customizeButton="teacher-button"
                    loadingCourse = {this.props.loadingCourse}
                />
                <CourseNotPublishedList
                    courses={this.props.coursesNotPublished} 
                    borderTopColor="#2185d0"
                    loadingCourse = {this.props.loadingCourse}
                />
            </>
        );
    }
}


const mapStateToProps = (state) => {

    return ({ 
            coursesPublished: getCoursesPublishedByUser(state),
            coursesNotPublished: getCoursesNotPublishedByUser(state),
            error:state.courses.isSuccess,
            message:state.courses.messageSuccess,
            loadingCourse: state.courses.isLoading
    })

}

export default connect(mapStateToProps,
{
    fetchCourseByUsername, 
    updateSuccessUnmount,
    unMountLoadingCourse
})(TeacherContainer);