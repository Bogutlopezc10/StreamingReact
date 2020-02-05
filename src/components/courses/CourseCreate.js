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
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container shadow container-published p-4">
                            <CourseForm categories ={this.props.categories} onSubmit={this.onSubmit} textButton="LIMPIAR" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null,{createCourse})(CourseCreate);

