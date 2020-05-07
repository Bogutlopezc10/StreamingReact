import React from 'react'
import MainHeader from '../../../components/MainHeader'
import TeacherStream from '../../../components/courses/streaming/TeacherStream'
import {fetchCourse} from '../../../actions/course'
import {getById} from '../../../selectors/index'
import {connect} from 'react-redux'

class TeacherStreamContainer extends React.Component {

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId)
    }

    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Live del curso" />
                <TeacherStream
                    course = {this.props.course}
                    borderTopColor="#005385" 
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { course: getById(state.courses.data,ownProps.courseId)}
}

export default connect(mapStateToProps, {fetchCourse})(TeacherStreamContainer);