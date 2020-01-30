import React from 'react';
import CourseList from '../../components/courses/CourseList';
import { fetchCourses } from '../../actions/course.js';
import { connect } from 'react-redux';

class CourseListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourses();
    }

    render(){
        if(!this.props.courses){
            return <div style={{ marginTop: "100px"}}>Vacio</div>
        }
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseList courses={this.props.courses} />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return { courses: Object.values(state.courses) }
}


export default connect(mapStateToProps,{fetchCourses})(CourseListContainer);