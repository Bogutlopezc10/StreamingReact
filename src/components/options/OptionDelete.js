import React from 'react'
import Modal from '../../components/Modal'
import history from '../../history'
import Spinner from '../Spinner';
import {deleteOptions} from '../../actions/option'
import {connect} from 'react-redux'

class OptionDelete extends React.Component{

    renderActions(){
        const {courseName,courseId, questionId} = this.props;
        return(
            <>
                <button type="button" className="btn course-button mr-3" data-dismiss="modal" onClick={()=>this.props.deleteOptions(questionId, courseName, courseId)} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CONFIRMAR</p> 
                        <i className="d-inline fas fa-check ml-2 mt-2"></i>
                    </div>
                </button>
                <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push(`/questions/${courseName}/${courseId}`)} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CANCELAR</p> 
                        <i className="d-inline fas fa-times ml-2 mt-2"></i>
                    </div>
                </button>
            </>
        );
    }
    renderContent(){
        if(!this.props.question){
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
                    <h5 className="d-inline">Estas seguro que quieres eliminar las opciones de la pregunta: </h5>
                    <p className="d-inline">{this.props.question.content}</p>
                </div>
            </div>
        );
    }

    render(){
        
        const {courseName,courseId} = this.props;
        return (
            <>
                <div style={{ height: "100vh" }}>
                    <Modal 
                        title = "Eliminar opciones"
                        description ={this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push(`/questions/${courseName}/${courseId}`)}
                    />
                </div>
            </>
        );
    }
}

export default connect(null, {deleteOptions})(OptionDelete);