import React from 'react'
import _ from 'lodash';
import {connect} from 'react-redux'
import CourseForm from '../../components/courses/CourseForm'
import Spinner from '../Spinner';
import {editCourse, editingCourse} from '../../actions/course'

class CourseEdit extends React.Component{

    onSubmit = (formValues, formData) => {
        this.props.editingCourse();
        this.props.editCourse(this.props.courseId, formValues, formData)
    }

    renderData = () =>{
        const {categories,course} = this.props;

        if(!course || categories.length == 0){
            return(
                <>
                    <div className="col-auto container-spinner-edit d-flex align-items-center justify-content-center">
                        <Spinner />
                    </div>
                </>
            )
        }

        return(
            <CourseForm
                categories ={categories}
                initialValues ={_.pick(course,'name','description','categoryId')}
                onSubmit={this.onSubmit}
                textButton="DESHACER CAMBIOS"
                isEditing = {true}
                isCreating = {this.props.isCreating}
            />
        )
    }
    render (){
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            {this.renderData()}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) =>{
    return {isCreating: state.courses.isCreating}
}
export default connect(mapStateToProps, {editCourse, editingCourse})(CourseEdit);