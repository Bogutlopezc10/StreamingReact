import React from 'react';
import './Category.css'
import {Link} from 'react-router-dom'


const CategoryList = ({ categories }) => {
    return (
        categories.map( categorie => {
            return(
                <div key={categorie.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card shadow h-100">
                        <img src="/bg-home.jpg" className="card-img" width="150" height="150" alt="bg-home" />
                        <div className="card-body">
                            <h5 className="card-title">{categorie.name}</h5>
                            <p className="card-text">{categorie.description}</p>
                        </div>
                        <Link to={`/courses/${categorie.name}/${categorie.id}`} className="btn btn-outline-primary">
                            <div>
                                <p className="d-inline">VER CURSOS</p> 
                                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        })
    );
}

export default CategoryList;