import React from 'react'
import Modal from '../Modal'
import history from '../../history'

class ContentDelete  extends React.Component {

    renderActions(){
        const id = this.props.contentId;
        return(
            <>
                <button type="button" className="btn course-button mr-3"  data-dismiss="modal" style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CONFIRMAR</p> 
                        <i className="d-inline fas fa-check ml-2 mt-2"></i>
                    </div>
                </button>
                <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push(`/courses/Content/${this.props.courseName}/${this.props.courseId}`)} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CANCELAR</p> 
                        <i className="d-inline fas fa-times ml-2 mt-2"></i>
                    </div>
                </button>
            </>
        );
    }
    renderContent(){
        if(!this.props.content){
            return <><h5>Estas seguro que quieres eliminar este contenido?</h5></>
        }
        return (
            <>
                <h5 className="d-inline">Estas seguro que quieres eliminar el contenido con nombre: </h5>
                <p className="d-inline">{this.props.content.name}</p>
            </>
        );
    }
    render(){
        return (
            <>
                <div style={{ height: "100vh" }}>
                    <Modal 
                        title = "Eliminar Contenido"
                        description ={this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push(`/courses/Content/${this.props.courseName}/${this.props.courseId}`)}
                    />
                </div>
            </>
        );
    }
}



export default ContentDelete;