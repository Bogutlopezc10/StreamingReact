import React from 'react'
import {connect} from 'react-redux'
import MainHeader from '../components/MainHeader'
import ValidateAnswers  from '../components/ValidateAnswers'
import {fetchUserCourse} from '../actions/userCourse'
import {getById} from '../selectors/index'

class ValidateAnswersContainer extends React.Component{

    componentDidMount(){
        this.props.fetchUserCourse(this.props.userCourseId);
    }
    render(){
        console.log(this.props.userCourse)
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Resultados del curso" />
                <ValidateAnswers
                    courseId = {this.props.courseId}
                    userCourseId = {this.props.userCourseId}
                    userCourse = {this.props.userCourse}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { userCourse: getById(state.userCourses.data, ownProps.userCourseId) }
}

export default connect(mapStateToProps, {fetchUserCourse})(ValidateAnswersContainer);