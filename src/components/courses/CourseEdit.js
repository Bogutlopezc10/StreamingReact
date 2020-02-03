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
                <div  style={{ borderTopColor: this.props.borderTopColor }} className="container container-published p-4 mb-5">
                    <CourseForm
                        categories ={categories}
                        initialValues ={_.pick(course,'name','description','categoryId')}
                        onSubmit={this.onSubmit}
                        textButton="DESHACER CAMBIOS"
                    />
                </div>
            </>
        );
    }
}


export default connect(null, {editCourse})(CourseEdit);