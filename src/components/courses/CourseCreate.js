import React from 'react'
import {createCourse} from '../../actions/course'
import { connect } from 'react-redux';
import CourseForm from  '../../components/courses/CourseForm'

class CourseCreate extends React.Component{

    constructor(props){
        super(props);
    }

    onSubmit = (formValues)=>{
        this.props.createCourse(formValues);
    }
    render(){
        return(
            <>
                <CourseForm categories ={this.props.categories} onSubmit={this.onSubmit}/>
            </>
        )
    }
}

export default connect(null,{createCourse})(CourseCreate);

