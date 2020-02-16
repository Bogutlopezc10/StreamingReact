import React from 'react';
import CourseCreate from '../../components/courses/CourseCreate';
import MainHeader from '../../components/MainHeader';
import {fetchCategories} from '../../actions/category'
import { connect } from 'react-redux';

class CourseCreateContainer extends React.Component{

    componentDidMount(){
        this.props.fetchCategories();
    }
    render(){

        if(!this.props.categories){
            return <>Vacio</>
        }
        return (
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Crear curso" />
                <CourseCreate categories ={this.props.categories} borderTopColor="#2185d0"/>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return ({ categories: Object.values(state.categories.data)})

}

export default connect(mapStateToProps, {fetchCategories})(CourseCreateContainer);