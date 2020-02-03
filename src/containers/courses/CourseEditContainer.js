import React from 'react'
import CourseEdit from '../../components/courses/CourseEdit'
import {connect} from 'react-redux'
import {fetchCourse} from '../../actions/course'
import {fetchCategories} from '../../actions/category'
import {getById} from '../../selectors/index';

class CourseEditContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId)
        this.props.fetchCategories();
    }
    render(){
        if(!this.props.course){
            return <>Vacio</>
        }
        return(
            <>
                <CourseEdit 
                    course={this.props.course} 
                    categories={this.props.categories}
                    courseId ={this.props.courseId}
                />
            </>
        );
    }

}

const mapStateToProps = (state, ownProps) =>{
    return { 
        course: getById(state.courses,ownProps.courseId),
        categories: Object.values(state.categories)
    }
}


export default connect(mapStateToProps, {fetchCourse, fetchCategories})(CourseEditContainer);