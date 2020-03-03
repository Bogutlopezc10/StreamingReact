import React from 'react';
import CategoryList from '../../components/categories/CategoryList';
import MainHeader from '../../components/MainHeader';
import { connect } from 'react-redux';
import { fetchCategories, unMountCategory } from '../../actions/category.js';
import {getDataOrderByCreatedAt} from '../../selectors/index'

class CategoryListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCategories();
    }

    componentWillUnmount(){
        this.props.unMountCategory()
    }

    render(){ 
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader="Categorias" />
                <CategoryList 
                    categories={this.props.categories}
                    loadingCategory = {this.props.loadingCategory}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        categories: getDataOrderByCreatedAt(state.categories.data),
        loadingCategory: state.categories.isLoading
    }
}

export default connect(mapStateToProps, { fetchCategories, unMountCategory})(CategoryListContainer);