import React from 'react';
import {connect} from 'react-redux'
import CoursePublishedList from '../../components/courses/CoursePublishedList';
import MainHeader from '../../components/MainHeader';
import {fetchCoursesBycategory, unMountLoadingCourse} from '../../actions/course'
import { getCourseByCategory } from '../../selectors/index.js'

class CourseByCategoryListContainer extends React.Component{

    componentDidMount(){
        const id = this.props.categoryId;
        this.props.fetchCoursesBycategory(id);
        
    }

    componentWillUnmount(){
        this.props.unMountLoadingCourse()
    }
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader= "Cursos" />
                <CoursePublishedList 
                    courses={this.props.courses} 
                    borderTopColor="#30b3ff" 
                    iconColor="#30b3ff"
                    teacher={false}
                    customizeButton="btn-outline-primary"
                    loadingCourse = {this.props.loadingCourse}
                />
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { 
        courses: getCourseByCategory(state, ownProps),
        loadingCourse: state.courses.isLoading
    }

}


export default connect(mapStateToProps, {fetchCoursesBycategory, unMountLoadingCourse})(CourseByCategoryListContainer);