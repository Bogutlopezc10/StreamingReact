import React from 'react';
import {connect} from 'react-redux'
import CourseDetail from '../../components/courses/CourseDetail'
import MainHeader from '../../components/MainHeader';
import {fetchCourse} from '../../actions/course';
import {createUserCourse} from '../../actions/userCourse'
import {getById} from '../../selectors/index';
import ErrorGeneric from '../../components/ErrorGeneric'
import {unMountUserCourse} from '../../actions/userCourse'

class CourseDetailContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId); 
    }
    
    componentWillUnmount(){
        this.props.unMountUserCourse();
    }

    onClickCreateUserCourse = (courseId) =>{
        this.props.createUserCourse(courseId)
    }


    renderMessage(){
        if(this.props.errorUserCourse){
            return(
                <>
                 <ErrorGeneric message={this.props.messageErrorUserCourse}/>
                </>
            )
        }
    }

    render(){
        if(!this.props.course){
            return <>Vacio</>
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Detalle del curso" />
                {this.renderMessage()}
                <CourseDetail 
                    course={this.props.course} 
                    borderTopColor="#005385"
                    onClickCreateUserCourse={this.onClickCreateUserCourse}
                />
            </>
        );
    }
}


const mapStateToProps = (state, ownProps) =>{
    return {
         course: getById(state.courses.data,ownProps.courseId),
         messageErrorUserCourse:state.userCourses.messageError,
         errorUserCourse:state.userCourses.isError
    }
}

export default connect(mapStateToProps,{fetchCourse, createUserCourse, unMountUserCourse})(CourseDetailContainer);