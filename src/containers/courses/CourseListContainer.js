import React from 'react';
import CourseList from '../../components/courses/CourseList';
import { fetchCourses } from '../../actions';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';

class CourseListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCourses();
    }

    render(){
        if(!this.props.courses){
            return <div style={{ marginTop: "100px"}}>Vacio</div>
        }
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseList categories={this.props.courses} />
            </div>
        );
    }
    render(){
        return (
            <div style={{ marginTop: "100px"}}>
                <CourseList/>
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return { courses: Object.values(state.courses) }
}


export default connect(mapStateToProps,{fetchCourses})(CourseListContainer);