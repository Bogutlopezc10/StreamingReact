import React from 'react'
import _ from 'lodash';
import {connect} from 'react-redux'
import CourseForm from '../../components/courses/CourseForm'
import {editCourse} from '../../actions/course'

class CourseEdit extends React.Component{


    onSubmit = (formValues) => {
        this.props.editCourse(this.props.courseId, formValues)
    }
    render (){
        const {categories,course} = this.props;
        return(
            <>
                <CourseForm
                 categories ={categories}
                 initialValues ={_.pick(course,'name','description','categoryId')}
                 onSubmit={this.onSubmit}
                />
            </>
        );
    }
}


export default connect(null, {editCourse})(CourseEdit);