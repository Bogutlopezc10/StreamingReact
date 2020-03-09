import React from 'react'
import { createCategory, creatingCategory } from '../../actions/category'
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component{

    onSubmit = (formValues, formData)=>{
        this.props.creatingCategory();
        this.props.createCategory(formValues, formData);
    }

    render(){
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            <CategoryForm 
                                onSubmit={this.onSubmit} 
                                textButton="LIMPIAR"
                                isEditing = {false}
                                isCreating = {this.props.isCreating}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return {isCreating: state.categories.isCreating}
}

export default connect(mapStateToProps,{createCategory, creatingCategory})(CategoryCreate);