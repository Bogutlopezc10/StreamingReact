import React from 'react';
import {connect} from 'react-redux'
import CourseByCategoryList from '../../components/courses/CourseByCategoryList';
import {fetchCoursesBycategory} from '../../actions/course'
import { getCourseByCategory } from '../../selectors/index.js'
import './CourseContainer.css'

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
                <div className="course-title-bycategory d-flex align-items-center justify-content-center mb-5">
                    <h1>{this.props.categoryName}</h1>
                </div>
                <div className="container container-courses-bycategory pt-4 px-4 mb-5">
                    <div className="row">
                        <CourseByCategoryList courses={this.props.courses} />
                    </div>              
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return { courses: getCourseByCategory(state, ownProps) }

}


export default connect(mapStateToProps, {fetchCoursesBycategory})(CourseByCategoryListContainer);