import React from 'react';
import { connect } from 'react-redux';
import { fetchUserCoursesByUserName } from '../../actions/userCourse';
import { getUserCoursesFinishedByUser, getUserCoursesNotFinishedByUser } from '../../selectors/index';
import MainHeader from '../../components/MainHeader';
import UserCourseFinishedList from '../../components/userCourses/UserCourseFinishedList';
import UserCourseNotFinishedList from '../../components/userCourses/UserCourseNotFinished';

class UserCourseContainer extends React.Component{
    componentDidMount(){
        this.props.fetchUserCoursesByUserName();
    }

    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Mis cursos" />
                <UserCourseFinishedList 
                    userCoursesFinished={this.props.userCoursesFinished} 
                    borderTopColor="#2185d0" 
                />
                <UserCourseNotFinishedList 
                    userCoursesNotFinished={this.props.userCoursesNotFinished} 
                    borderTopColor="#2185d0" 
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        userCoursesFinished: getUserCoursesFinishedByUser(state),
        userCoursesNotFinished: getUserCoursesNotFinishedByUser(state) 
    }
}

export default connect(mapStateToProps,{ fetchUserCoursesByUserName })(UserCourseContainer);