import React from 'react'
import _ from 'lodash';
import {connect} from 'react-redux'
import CourseForm from '../../components/courses/CourseForm'
import {editCourse} from '../../actions/course'

class CourseEdit extends React.Component{


    onSubmit = (formValues) => {
        this.props.editCourse(this.props.courseId, formValues)
    }

    renderData = () =>{
        const {categories,course} = this.props;

        if(!course || categories.length == 0){
            return(
                <>
                    LOADING...........
                </>
            )
        }

        return(
            <CourseForm
                categories ={categories}
                initialValues ={_.pick(course,'name','description','categoryId')}
                onSubmit={this.onSubmit}
                textButton="DESHACER CAMBIOS"
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


export default connect(null, {editCourse})(CourseEdit);