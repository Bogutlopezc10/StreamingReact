import React from 'react'
import {createCourse} from '../../actions/course'
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import CourseForm from  '../../components/courses/CourseForm'

class CourseCreate extends React.Component{

    onSubmit = (formValues)=>{
        this.props.createCourse(formValues);
    }
    renderData = () =>{
        const {loadingCategory, categories} = this.props;

        if(categories.length == 0 && loadingCategory){
            return(
                <>
                    <div className="col-auto container-spinner-edit d-flex align-items-center justify-content-center">
                        <Spinner />
                    </div>
                </>
            )
        }
        else if (categories.length == 0 && !loadingCategory){
            return(
                <>
                    <div className="col-auto container-spinner-edit d-flex align-items-center justify-content-center">
                            <EmptyData 
                                message="No se encontraron categorías." 
                                heightImage="150px"
                                widthImage="150px" 
                                marginBottom="10px"
                            />
                    </div>
                </>
            )  
        }
        return(
            <CourseForm 
                categories ={this.props.categories} 
                onSubmit={this.onSubmit} 
                textButton="LIMPIAR" 
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

export default connect(null,{createCourse})(CourseCreate);

