import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import './Category.css'


class CategoryList extends React.Component{
    renderData = () => {
        const { categories, loadingCategory } = this.props;
        if(categories.length == 0 && loadingCategory){
            return (
                <>
                    LOADING..........
                </>
            )
        }
        if(categories.length == 0 && !loadingCategory){
            return (
                <>
                    NO HAY DATOS PARA CARGAR
                </>
            )
        }

        return(
            <>
                {categories.map( category =>
                    <Category key={category.id} category={category} />
                )}
            </>
        )
    }

    render(){
        return(
            <>  
                <div className="container mb-3">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <h1 className="title-published">Gestionar categorias</h1>
                        </div>
                        <div className="col-auto">
                            <Link to="/categories/Create" className="btn btn-outline-success">
                                <div>
                                    <p className="d-inline">CREAR CATEGORIA</p> 
                                    <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container category-shadow container-categories pt-4 px-4 testimonial-group">
                    <div className="row">
                        {this.renderData()}
                    </div>              
                </div>
            </>
        )
    }
}

export default CategoryList;