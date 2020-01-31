import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import {fetchCourse} from '../../actions/course';
import {getById} from '../../selectors/index';

class CourseDetailContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId);  
    }

    render(){
        if(!this.props.course){
            return <>Vacio</>
        }
        return (
            <>
                <div className="course-title d-flex align-items-center justify-content-center mb-5">
                    <h1>Detalle del Curso</h1>
                </div>
                <div className="container container-courses p-4 mb-5">
                    <div className="row">
                        <CourseDetail course={this.props.course}/>
                    </div>              
                </div>
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{
    return { course: getById(state.courses,ownProps.courseId)}
}

export default connect(mapStateToProps,{fetchCourse})(CourseDetailContainer);