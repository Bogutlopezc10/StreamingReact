import React from 'react'
import CategoryDelete  from '../../components/categories/CategoryDelete';
import { fetchCategory } from '../../actions/category';
import {connect} from 'react-redux'
import {getById} from '../../selectors/index';
import {scrollUp} from '../../scroll'

class CategoryDeleteContainer extends React.Component{
    componentDidMount(){
        scrollUp()
        this.props.fetchCategory(this.props.categoryId)
    }

    render (){
        
        return (
            <>
                <CategoryDelete category ={this.props.category}
                categoryId={this.props.categoryId}
                backgroundHeaderColor="#005385" />
            </>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return { category: getById(state.categories.data,ownProps.categoryId) }
}

export default connect(mapStateToProps, {fetchCategory})(CategoryDeleteContainer);