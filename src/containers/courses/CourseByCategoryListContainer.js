import React from 'react';
import {connect} from 'react-redux'
import CoursePublishedList from '../../components/courses/CoursePublishedList';
import MainHeader from '../../components/MainHeader';
import {fetchCoursesBycategory} from '../../actions/course'
import { getCourseByCategory } from '../../selectors/index.js'

class CourseByCategoryListContainer extends React.Component{

    componentDidMount(){
        const id = this.props.categoryId;
        this.props.fetchCoursesBycategory(id);
        
    }
    render(){
        if(!this.props.courses){
            return <>Vacio</>
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader={this.props.categoryName} />
                <CoursePublishedList 
                    courses={this.props.courses} 
                    borderTopColor="#30b3ff" 
                    teacher={false}
                    customizeButton="btn-outline-primary"
                />
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { courses: getCourseByCategory(state, ownProps) }

}


export default connect(mapStateToProps, {fetchCoursesBycategory})(CourseByCategoryListContainer);