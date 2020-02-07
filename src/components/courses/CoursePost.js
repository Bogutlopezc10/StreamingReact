import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {postCourse} from '../../actions/course'
import {connect} from 'react-redux'

class CoursePost extends React.Component {

    renderActions(){
        const id = this.props.courseId;
        return(
            <>
                <button type="button" className="btn course-button mr-3" data-dismiss="modal" onClick={()=>this.props.postCourse(id)}  style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CONFIRMAR</p> 
                        <i className="d-inline fas fa-check ml-2 mt-2"></i>
                    </div>
                </button>
                <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push('/Teacher')} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CANCELAR</p> 
                        <i className="d-inline fas fa-times ml-2 mt-2"></i>
                    </div>
                </button>
            </>
        );
    }
    renderContent(){
        return (
            <>
                <h5 className="d-inline">Estas seguro que quieres publicar el curso con nombre: </h5>
                <p className="d-inline">{this.props.course.name}</p>
            </>
        );
    }

    renderClose(){
        return(
            <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push('/Teacher')} style={{ borderRadius: ".25rem" }}>
                <div>
                    <p className="d-inline">CERRAR</p> 
                    <i className="d-inline fas fa-times ml-2 mt-2"></i>
                </div>
            </button>
        )
    }
    renderModal(){
        if(this.props.canBeposted){

            return (
                <Modal 
                        title = "Publicar curso curso"
                        description ={this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push('/Teacher')}
                />
            )
        }
        else if(this.props.canBeposted == false){
            return(
                <Modal 
                        title = "El curso no se puede publicar"
                        description ="el curso no se puede publicar porque no cumple con los parámetros especificados"
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderClose()}
                        onDismiss={()=> history.push('/Teacher')}
                />
            )
        }
        return (
            <Modal 
                        title = "Loading......."
                        description ="Loading........"
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderClose()}
                        onDismiss={()=> history.push('/Teacher')}
                />
        )
    }
    render (){
        return(
            <>
                <div style={{ height: "100vh"}}>
                    {this.renderModal()}
                </div>
            </>
        );
    }
}

export default connect(null,{postCourse})(CoursePost);