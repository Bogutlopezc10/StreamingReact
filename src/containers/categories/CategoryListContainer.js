import React from 'react';
import CategoryList from '../../components/categories/CategoryList';
import MainHeader from '../../components/MainHeader';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/category.js';
import {getDataOrderByCreatedAt} from '../../selectors/index'

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
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader="Categorias" />
                <CategoryList categories={this.props.categories} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { categories: getDataOrderByCreatedAt(state.categories.data)}
}

export default connect(mapStateToProps, { fetchCategories })(CategoryListContainer);