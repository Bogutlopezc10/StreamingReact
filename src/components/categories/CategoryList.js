import React from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import './Category.css'


class CategoryList extends React.Component {
  renderData = () => {
    const { categories, loadingCategory, isAdmin } = this.props;
    if (categories.length === 0 && loadingCategory) {
      return (
        <>
          <div className="row d-flex align-items-center justify-content-center" style={{ height: "300px" }}>
            <div className="col-auto mb-4">
              <Spinner />
            </div>
          </div>
        </>
      )
    }
    if (categories.length === 0 && !loadingCategory) {
      return (
        <>
          <div className="row d-flex align-items-center justify-content-center mb-4" style={{ height: "300px" }}>
            <div className="col-auto mb-4">
              <EmptyData
                message="No se encontraron categorías."
                heightImage="150px"
                widthImage="150px"
                marginBottom="10px"
              />
            </div>
          </div>
        </>
      )
    }

    return (
      <>
        <div className="row">
          {categories.map(category =>
            <Category
              key={category.id}
              category={category}
              isAdmin={isAdmin}
            />
          )}
        </div>
      </>
    )
  }

  renderButtonMore() {

    const { onClickMoresCategories, getAllCategories, counterCategories } = this.props;

    if (getAllCategories.length > counterCategories) {
      return (
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-4 mb-4">
            <button onClick={onClickMoresCategories} className="btn btn-block see-more-button">
              <div>
                <p className="d-inline">VER MÁS</p>
                <i className="d-inline fas fa-angle-double-down ml-2 mt-2"></i>
              </div>
            </button>
          </div>
        </div>
      )
    }
  }

  renderAdminPanel = () => {
    const { isAdmin } = this.props;
    if (isAdmin) {
      return (
        <>
          <div className="container mb-3">
            <div className="row align-items-center justify-content-between">
              <div className="col-auto">
                <h1 className="title-published">Gestionar categorías</h1>
              </div>
              <div className="col-auto mt-3 mb-2">
                <Link to="/categories/Create" className="btn btn-outline-success">
                  <div>
                    <p className="d-inline">CREAR CATEGORÍA</p>
                    <i className="d-inline fas fa-cog ml-2 mt-2"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  render() {
    return (
      <>
        {this.renderAdminPanel()}
        <div className="container category-shadow container-categories pt-4 px-4">
          {this.renderData()}
          {this.renderButtonMore()}
        </div>
      </>
    )
  }
}

export default CategoryList;
