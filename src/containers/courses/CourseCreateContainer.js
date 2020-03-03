import React from 'react';
import CourseCreate from '../../components/courses/CourseCreate';
import MainHeader from '../../components/MainHeader';
import {fetchCategories, unMountCategory} from '../../actions/category'
import { connect } from 'react-redux';

class CourseCreateContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCategories();
    }
    componentWillUnmount(){
        this.props.unMountCategory();
    }
    render(){
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Crear curso" />
                <CourseCreate 
                    categories ={this.props.categories} 
                    borderTopColor="#005385"
                    loadingCategory = {this.props.loadingCategory}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
return ({ 
    categories: Object.values(state.categories.data),
    loadingCategory: state.categories.isLoading
})

}

export default connect(mapStateToProps, {fetchCategories, unMountCategory})(CourseCreateContainer);