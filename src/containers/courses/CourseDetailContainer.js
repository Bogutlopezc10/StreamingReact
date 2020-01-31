import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import {fetchCourse} from '../../actions/course'

class CourseDetailContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId);
        
    }
    render(){
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseDetail course ={this.props.course}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{

    return {course: state.courses[ownProps.courseId]}
}

export default connect(mapStateToProps,{fetchCourse})(CourseDetailContainer);