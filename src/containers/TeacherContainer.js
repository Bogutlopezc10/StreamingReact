import React from 'react';
import CoursePublishedList from '../components/courses/CoursePublishedList';
import CourseNotPublishedList from '../components/courses/CourseNotPublishedList';
import MainHeader from '../components/MainHeader';
import { connect } from 'react-redux';
import {fetchCourseByUsername} from '../actions/course'
import { getCoursesPublishedByUser, getCoursesNotPublishedByUser } from '../selectors/index.js'
import { CURRENT_USER } from '../actions/types'
import {updateSuccessUnmount} from '../actions/success'
import Success from '../components/Success'

class TeacherContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourseByUsername(CURRENT_USER);

        this.timerID = setTimeout(
            () => this.props.updateSuccessUnmount(),
            10000
        );
    }
    componentWillUnmount(){
        clearTimeout(this.timerID);
        this.props.updateSuccessUnmount();
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
        if(!this.props.coursesPublished && !this.props.coursesNotPublished){
            return <>Vacio</>
        }
        return (
            <>  
                <MainHeader backgroundHeaderColor="#2185d0" textHeader="Panel de control" />
                {this.renderMessage()}
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
            coursesNotPublished: getCoursesNotPublishedByUser(state),
            error:state.courses.isSuccess,
            message:state.courses.messageSuccess
    })

}

export default connect(mapStateToProps, {fetchCourseByUsername, updateSuccessUnmount})(TeacherContainer);