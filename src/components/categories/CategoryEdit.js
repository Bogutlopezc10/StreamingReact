import React from 'react'
import _ from 'lodash';
import { editCategory, creatingCategory} from '../../actions/category'
import { connect } from 'react-redux';
import Spinner from '../Spinner';
import CategoryForm from './CategoryForm';

class CategoryEdit extends React.Component{

    onSubmit = (formValues, formData) =>{
        this.props.creatingCategory();
        this.props.editCategory(this.props.category.id,formValues, formData);
    }

    renderData = () => {
        const { category} = this.props;

        if(!category){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center" style={{height:"340px"}}>
                        <Spinner />
                    </div>
                </>
            )
        }
        return(
            <CategoryForm 
                initialValues ={_.pick(category,'name','description')} 
                onSubmit={this.onSubmit} 
                textButton="DESHACER CAMBIOS"
                isCreating = {this.props.isCreating}
                isEditing = {true}
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
    return {isCreating: state.categories.isCreating}
}
export default connect(mapStateToProps,{editCategory, creatingCategory})(CategoryEdit);