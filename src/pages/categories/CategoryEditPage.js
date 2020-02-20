import React from 'react';
import CategoryEditContainer from '../../containers/categories/CategoryEditContainer';
import './CategoryPage.css'

const CategoryEditPage = (props) => {
    return(
        <div className="main-container">
            <CategoryEditContainer categoryId={props.match.params.id}/>
        </div>
    )
}

export default CategoryEditPage;