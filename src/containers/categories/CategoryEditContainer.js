import React from 'react';
import MainHeader from '../../components/MainHeader';
import { connect } from 'react-redux';
import { fetchCategory, unMountCategory } from '../../actions/category';
import { getById } from '../../selectors/index';
import CategoryEdit from '../../components/categories/CategoryEdit';

class CategoryEditContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCategory(this.props.categoryId);
    }
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#30b3ff" textHeader="Editar categoria" />
                <CategoryEdit 
                    category={this.props.category} 
                    borderTopColor="#30b3ff"
                    loadingCategory = {this.props.loadingCategory}
                />
            </>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return { 
        category: getById(state.categories.data,ownProps.categoryId),
    }
}

export default connect(mapStateToProps,{ fetchCategory, unMountCategory })(CategoryEditContainer);