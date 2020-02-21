import React from 'react'
import CoursePlayer from '../../components/player/CoursePlayer'
import {fetchUserCourse} from '../../actions/userCourse'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index'

class CoursePlayerContainer extends React.Component{

    componentDidMount(){
        this.props.fetchUserCourse(this.props.userCourseId)
    }
    render(){

        if(!this.props.course){
            return <div>Cargando....................</div>
        }
        return(
            <>
                <CoursePlayer
                    course = {this.props.course}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {course: getById(state.userCourses.data,ownProps.userCourseId)}
}

export default connect(mapStateToProps, {fetchUserCourse})(CoursePlayerContainer);