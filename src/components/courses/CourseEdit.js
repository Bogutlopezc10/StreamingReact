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
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            <CourseForm
                                categories ={categories}
                                initialValues ={_.pick(course,'name','description','categoryId')}
                                onSubmit={this.onSubmit}
                                textButton="DESHACER CAMBIOS"
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default connect(null, {editCourse})(CourseEdit);