import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import './Category.css'


class CategoryList extends React.Component{
    renderData = () => {
        const { categories, loadingCategory } = this.props;
        if(categories.length == 0 && loadingCategory){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"250px"}}>
                        <Spinner />
                    </div>
                </>
            )
        }
        if(categories.length == 0 && !loadingCategory){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"250px"}}>
                        <EmptyData 
                            message="No se encontraron categorías." 
                            heightImage="150px"
                            widthImage="150px" 
                            marginBottom="10px"
                        />
                    </div>                
                </>
            )
        }

        return(
            <>
                {categories.map( category =>
                    <Category 
                        key={category.id} 
                        category={category} 
                        />
                )}
            </>
        )
    }

    renderButtonMore () {
        
        const {onClickMoresCategories, getAllCategories, counterCategories} = this.props;

        if(getAllCategories.length > counterCategories){
            return(
                <button onClick = {onClickMoresCategories} className="btn btn-primary">More</button>  
            )
        }
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
                <div className="container category-shadow container-categories pt-4 px-4">
                    <div className="row">
                        {this.renderData()}
                    </div>
                    {this.renderButtonMore()}
                </div>
            </>
        )
    }
}

export default CategoryList;