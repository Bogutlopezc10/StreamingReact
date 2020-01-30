import React from 'react';
import CategoryList from '../../components/categories/CategoryList';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
import './CategoryListContainer.css';

class CategoryListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchCategories();
    }

    render(){
        if(!this.props.categories){
            return <>Vacio</>
        }
        return (
            <>
                <div className="category-title d-flex align-items-center justify-content-center mb-5">
                    <h1>Categorias</h1>
                </div>
                <div className="container container-categories pt-4 px-4 mb-5">
                    <div className="row">
                        <CategoryList categories={this.props.categories} />
                    </div>              
                </div>
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { categories: Object.values(state.categories) }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryListContainer);