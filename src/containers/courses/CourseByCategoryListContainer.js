import React from 'react';
import {connect} from 'react-redux'
import CourseByCategoryList from '../../components/courses/CourseByCategoryList';
import {fetchCoursesBycategory} from '../../actions/course'
import getCourseByCategory from '../../selectors/coursesByCategory.js'

class CourseByCategoryListContainer extends React.Component{

    componentDidMount(){
        const id = this.props.categoryId;
        this.props.fetchCoursesBycategory(id);
        
    }
    render(){
        
        console.log(this.props.courses)
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseByCategoryList />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { courses: getCourseByCategory(state, ownProps) }

}


export default connect(mapStateToProps, {fetchCoursesBycategory})(CourseByCategoryListContainer);