import React from 'react'
import CourseEdit from '../../components/courses/CourseEdit'
import MainHeader from '../../components/MainHeader';
import {connect} from 'react-redux'
import {fetchCourse, unMountLoadingCourse} from '../../actions/course'
import {fetchCategories, unMountCategory} from '../../actions/category'
import {getById} from '../../selectors/index';

class CourseEditContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourse(this.props.courseId)
        this.props.fetchCategories();
    }

    componentWillUnmount(){
        this.props.unMountLoadingCourse();
    }
    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Editar curso" />
                <CourseEdit 
                    course={this.props.course} 
                    categories={this.props.categories}
                    courseId ={this.props.courseId}
                    borderTopColor="#005385"
                />
            </>
        );
    }

}

const mapStateToProps = (state, ownProps) =>{
    return { 
        course: getById(state.courses.data,ownProps.courseId),
        categories: Object.values(state.categories.data)
    }
}


export default connect(mapStateToProps,
{
    fetchCourse, 
    fetchCategories, 
    unMountCategory,
    unMountLoadingCourse
})(CourseEditContainer);