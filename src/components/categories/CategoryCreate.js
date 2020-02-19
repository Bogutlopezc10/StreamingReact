import React from 'react'
import { createCategory } from '../../actions/category'
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';

class CategoryCreate extends React.Component{

    onSubmit = (formValues)=>{
        this.props.createCategory(formValues);
    }

    render(){
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            <CategoryForm onSubmit={this.onSubmit} textButton="LIMPIAR" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null,{createCategory})(CategoryCreate);