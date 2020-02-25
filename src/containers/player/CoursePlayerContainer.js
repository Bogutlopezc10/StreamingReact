import React from 'react'
import CoursePlayer from '../../components/player/CoursePlayer'
import {fetchUserCourse, updateRatingUserCourse} from '../../actions/userCourse'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index'

class CoursePlayerContainer extends React.Component{

    componentDidMount(){
        this.props.fetchUserCourse(this.props.userCourseId)
    }

    onClickUpdateRating = (id,rating) => {
        const updateRating = {
            rating: rating
        }
        this.props.updateRatingUserCourse(id,updateRating);
    }

    render(){
        return(
            <>
                <CoursePlayer
                    course = {this.props.course}
                    userCourseId = {this.props.userCourseId}
                    courseId={this.props.courseId}
                    onClickUpdateRating = {this.onClickUpdateRating}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {course: getById(state.userCourses.data,ownProps.userCourseId)}
}

export default connect(mapStateToProps, {fetchUserCourse, updateRatingUserCourse})(CoursePlayerContainer);