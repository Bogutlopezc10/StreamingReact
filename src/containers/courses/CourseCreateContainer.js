import React from 'react';
import CourseCreate from '../../components/courses/CourseCreate';
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
            <div>
                <CourseCreate categories ={this.props.categories}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return ({ categories: Object.values(state.categories)})

}

export default connect(mapStateToProps, {fetchCategories})(CourseCreateContainer);