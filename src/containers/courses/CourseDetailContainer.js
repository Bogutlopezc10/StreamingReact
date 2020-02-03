import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import MainHeader from '../../components/MainHeader';
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
                <MainHeader backgroundHeaderColor="#005385" textHeader="Detalle del Curso" />
                <CourseDetail course={this.props.course} borderTopColor="#005385"/>
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{
    return { course: getById(state.courses,ownProps.courseId)}
}

export default connect(mapStateToProps,{fetchCourse})(CourseDetailContainer);