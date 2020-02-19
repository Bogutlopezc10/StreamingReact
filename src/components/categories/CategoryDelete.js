import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import { deleteCategory } from '../../actions/category'
import {connect} from 'react-redux'

class CategoryDelete extends React.Component{

    renderActions(){
        const id = this.props.categoryId;
        return(
            <>
                <button type="button" className="btn course-button mr-3" data-dismiss="modal" onClick={()=>this.props.deleteCategory(id)} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CONFIRMAR</p> 
                        <i className="d-inline fas fa-check ml-2 mt-2"></i>
                    </div>
                </button>
                <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push('/categories')} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CANCELAR</p> 
                        <i className="d-inline fas fa-times ml-2 mt-2"></i>
                    </div>
                </button>
            </>
        );
    }
    renderContent(){
        if(!this.props.category){
            return <><h5>Estas seguro que quieres eliminar esta categoría?</h5></>
        }
        return (
            <>
                <h5 className="d-inline">Estas seguro que quieres eliminar la categoría con nombre: </h5>
                <p className="d-inline">{this.props.category.name}</p>
            </>
        );
    }
    render(){
        
        return (
            <>
                <div style={{ height: "100vh" }}>
                    <Modal 
                        title = "Eliminar categoría"
                        description ={this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push('/categories')}
                    />
                </div>
            </>
        );
    }
}

export default connect(null, {deleteCategory})(CategoryDelete);