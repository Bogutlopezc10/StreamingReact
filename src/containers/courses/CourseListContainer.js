import React from 'react';
import CourseList from '../../components/courses/CourseList';
import { fetchCourses } from '../../actions/course.js';
import { connect } from 'react-redux';
import './CourseListContainer.css'

class CourseListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourses();
    }

    render(){
        if(!this.props.courses){
            return <>Vacio</>
        }
        return (
            <>
                <div className="course-title d-flex align-items-center justify-content-center mb-5">
                    <h1>Cursos</h1>
                </div>
                <div className="container container-courses pt-4 px-4 mb-5">
                    <div className="row">
                        <CourseList courses={this.props.courses} />
                    </div>              
                </div>
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return { courses: Object.values(state.courses) }
}


export default connect(mapStateToProps,{fetchCourses})(CourseListContainer);