import React from 'react'
import StudentStreamList from '../../../components/courses/streaming/StudentStreamList'
import MainHeader from '../../../components/MainHeader'
import {fetchUserCoursesStreamingByUser} from '../../../actions/userCourse'
import {getUserCoursesIstreamingByUser} from '../../../selectors/index'
import {connect} from 'react-redux'

class StudentStreamListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchUserCoursesStreamingByUser()
    }
    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Streaming" />
                <StudentStreamList
                    isLoading = {this.props.loadingUserCourse}
                    userCourses = {this.props.userCourses}
                    borderTopColor="#005385"
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return { 
        userCourses: getUserCoursesIstreamingByUser(state),
        loadingUserCourse: state.userCourses.isLoading
    }
}

export default connect(mapStateToProps, {fetchUserCoursesStreamingByUser})(StudentStreamListContainer);