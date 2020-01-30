import React from 'react';
import './Category.css'

const CategoryList = ({ categories }) => {
    return (
        categories.map( categorie => {
            return(
                <div key={categorie.id} className="col-md-4 mb-4">
                    <div className="card shadow h-100">
                        <img src="/bg-home.jpg" className="card-img" />
                        <div className="card-body">
                            <h5 className="card-title">{categorie.name}</h5>
                            <p className="card-text">{categorie.description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    );
}

export default CategoryList;