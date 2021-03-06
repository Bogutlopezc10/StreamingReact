import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import Spinner from '../Spinner';
import {deleteSubject} from '../../actions/subject'

class SubjectDelete extends React.Component {

    renderActions(){
        const id = this.props.subjectId;
        return(
            <>
                <button type="button" className="btn course-button mr-3" onClick={()=>this.props.deleteSubject(id,this.props.courseName, this.props.courseId)} data-dismiss="modal" style={{ borderRadius: ".25rem" }}>
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
        if(!this.props.subject){
            return (
                <div className="row d-flex justify-content-center">
                    <div className="col-auto">
                        <Spinner />
                    </div>
                </div>
            )
        }
        return (
            <div className="row">
                <div className="col-auto py-2">
                    <h5 className="d-inline">Estas seguro que quieres eliminar el tema con nombre: </h5>
                    <p className="d-inline">{this.props.subject.name}</p>
                </div>
            </div>
        );
    }
    render(){
        return (
            <>
                <div style={{ height: "100vh" }}>
                    <Modal 
                        title = "Eliminar tema"
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

export default connect(null, {deleteSubject})(SubjectDelete);