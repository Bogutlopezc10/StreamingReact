import React from 'react';
import CategoryList from '../../components/categories/CategoryList';
import MainHeader from '../../components/MainHeader';
import { connect } from 'react-redux';
import { fetchCategories, unMountCategory, countCategories } from '../../actions/category.js';
import { IsAdmin } from '../../selectors/authSelectors';
import {getDataOrderByCreatedAt, getAllCategories} from '../../selectors/index'

class CategoryListContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCategories();
    }

    componentWillUnmount(){
        this.props.unMountCategory()
    }

    onClickMoresCategories = () => {
        this.props.countCategories();
    }

    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader="Categorías" />
                <CategoryList 
                    categories={this.props.categories}
                    loadingCategory = {this.props.loadingCategory}
                    onClickMoresCategories = {this.onClickMoresCategories}
                    counterCategories = {this.props.counterCategories}
                    getAllCategories = {this.props.getAllCategories}
                    isAdmin = {this.props.isAdmin}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counterCategories: state.categories.countCategories,
        getAllCategories: getAllCategories(state.categories.data),
        categories: getDataOrderByCreatedAt(state.categories.data, state.categories.countCategories),
        loadingCategory: state.categories.isLoading,
        isAdmin: IsAdmin(state)
    }
}

export default connect(mapStateToProps, { fetchCategories, unMountCategory, countCategories})(CategoryListContainer);
