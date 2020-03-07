import React from 'react';
import { connect } from 'react-redux';
import { fetchUserCoursesByUserName, unMountLoadingUserCourse } from '../../actions/userCourse';
import { getUserCoursesFinishedByUser, getUserCoursesNotFinishedByUser } from '../../selectors/index';
import MainHeader from '../../components/MainHeader';
import UserCourseFinishedList from '../../components/userCourses/UserCourseFinishedList';
import UserCourseNotFinishedList from '../../components/userCourses/UserCourseNotFinished';

class UserCourseContainer extends React.Component{
    componentDidMount(){
        this.props.fetchUserCoursesByUserName();
    }

    componentWillUnmount(){
        this.props.unMountLoadingUserCourse()
    }

    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Mis cursos" />
                <UserCourseNotFinishedList 
                    userCoursesNotFinished={this.props.userCoursesNotFinished}
                    userCoursesLoading = {this.props.userCoursesLoading}
                    borderTopColor="#2185d0" 
                />
                <UserCourseFinishedList 
                    userCoursesFinished={this.props.userCoursesFinished} 
                    borderTopColor="#2185d0"
                    userCoursesLoading = {this.props.userCoursesLoading}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        userCoursesFinished: getUserCoursesFinishedByUser(state),
        userCoursesNotFinished: getUserCoursesNotFinishedByUser(state),
        userCoursesLoading:state.userCourses.isLoading
    }
}

export default connect(mapStateToProps,{ fetchUserCoursesByUserName, unMountLoadingUserCourse })(UserCourseContainer);