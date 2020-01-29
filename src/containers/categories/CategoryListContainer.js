import React from 'react';
import CategoryList from '../../components/categories/CategoryList';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';

class CategoryListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchCategories();
    }

    render(){
        if(!this.props.categories){
            return <div style={{ marginTop: "100px"}}>Vacio</div>
        }
        return (
            <div style={{ marginTop: "100px"}}>
                <CategoryList categories={this.props.categories} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { categories: Object.values(state.categories) }
}

export default connect(mapStateToProps, { fetchCategories })(CategoryListContainer);