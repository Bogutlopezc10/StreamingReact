import React from 'react'
import _ from 'lodash';
import { editCategory } from '../../actions/category'
import { connect } from 'react-redux';
import CategoryForm from './CategoryForm';

class CategoryEdit extends React.Component{

    onSubmit = (formValues) =>{
        this.props.editCategory(this.props.category.id,formValues);
    }

    render(){
        const { category } = this.props;
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            <CategoryForm 
                                initialValues ={_.pick(category,'name','description')} 
                                onSubmit={this.onSubmit} 
                                textButton="DESHACER CAMBIOS" />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null,{editCategory})(CategoryEdit);