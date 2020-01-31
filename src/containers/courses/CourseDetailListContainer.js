import React from 'react';
import {connect} from 'react-redux'
import CourseDetailList from '../../components/courses/CourseDetailList'
import {fetchCourse} from '../../actions/course'

class CourseDetailListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId);
        
    }
    render(){
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseDetailList course ={this.props.course}/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{

    return {course: state.courses[ownProps.courseId]}
}

export default connect(mapStateToProps,{fetchCourse})(CourseDetailListContainer);