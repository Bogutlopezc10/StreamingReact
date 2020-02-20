import React from 'react'
import CategoryDeleteContainer from '../../containers/categories/CategoryDeleteContainer';

const CategoryDeletePage = (props) =>{
    return(
        <div>
            <CategoryDeleteContainer categoryId={props.match.params.id}/>
        </div>
    )
}

export default CategoryDeletePage;