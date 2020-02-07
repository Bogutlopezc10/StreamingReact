import React from 'react'
import CourseDelete  from '../../components/courses/CourseDelete'
import {fetchCourse} from '../../actions/course'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index';
import {scrollUp} from '../../scroll'

class CourseDeleteContainer extends React.Component{
    

    componentDidMount(){
        scrollUp()
        this.props.fetchCourse(this.props.courseId)
    }
    render (){
        
        return (
            <>
                <CourseDelete course ={this.props.course} courseId={this.props.courseId} backgroundHeaderColor="#005385" />
            </>
        )
    }
}

const mapToStateMapProps =(state, ownProps) =>{
    return {course:getById(state.courses.data,ownProps.courseId)}
}

export default connect(mapToStateMapProps, {fetchCourse})(CourseDeleteContainer);