import React from 'react';
import Category from './Category';
import './Category.css'


const CategoryList = ({ categories }) => {
    return(
        <>
            <div className="container category-shadow container-categories pt-4 px-4 testimonial-group">
                <div className="row">
                    {categories.map( category =>
                        <Category key={category.id} category={category} />
                    )}
                </div>              
            </div>
        </>
    )
}

export default CategoryList;