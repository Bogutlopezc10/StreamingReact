import React from 'react'
import {createCourse, creatingCourse} from '../../actions/course'
import { connect } from 'react-redux';
import CourseForm from  '../../components/courses/CourseForm'

class CourseCreate extends React.Component{

    onSubmit = (formValues,formData)=>{
        this.props.creatingCourse();
        this.props.createCourse(formValues, formData);
    }
    renderData = () =>{
        const {loadingCategory, categories} = this.props;

        if(categories.length == 0 && loadingCategory){
            return(
                <>
                    LOADING.......
                </>
            )
        }
        else if (categories.length == 0 && !loadingCategory){
            return(
                <>
                    NO HAY CATEGORIAS PARA CREAR EL CURSO
                </>
            )  
        }
        return(
            <CourseForm 
                categories ={this.props.categories} 
                onSubmit={this.onSubmit} 
                textButton="LIMPIAR"
                isEditing = {false}
                isCreating = {this.props.isCreating}
            />
        )
    }
    render(){
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
        )
    }
}

const mapStateToProps = (state) =>{
    return {isCreating: state.courses.isCreating}
}
export default connect(mapStateToProps,{createCourse, creatingCourse})(CourseCreate);

