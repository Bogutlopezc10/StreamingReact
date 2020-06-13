import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {postCourse} from '../../actions/course'
import Spinner from '../Spinner';
import {connect} from 'react-redux'

class CoursePost extends React.Component {

    renderActions(){
        const id = this.props.courseId;
        if(this.props.canBeposted){
            return (
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
            )
        }
        else if(this.props.canBeposted === false){
            return(
                <>
                    <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push('/Teacher')} style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">CERRAR</p> 
                            <i className="d-inline fas fa-times ml-2 mt-2"></i>
                        </div>
                    </button>
                </>
            )
        }
        return (
            <>
                <button  type="button" className="btn btn-outline-danger" data-dismiss="modal" onClick={()=>history.push('/Teacher')} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">CERRAR</p> 
                        <i className="d-inline fas fa-times ml-2 mt-2"></i>
                    </div>
                </button>
            </>
        )
    }

    renderContent(){
        if(this.props.canBeposted){
            return (
                <div className="row">
                    <div className="col-auto py-2">
                        <h5 className="d-inline">Estas seguro que quieres publicar el curso con nombre: </h5>
                        <p className="d-inline">{this.props.course.name}</p>
                    </div>
                </div>
            )
        }
        else if(this.props.canBeposted === false){
            return (
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <i className="fas fa-exclamation-circle icon-post"></i>
                    </div>
                    <div className="col-12 mt-3">
                        <p className="d-inline">¡Lo sentimos! No puedes publicar el curso. </p>
                        <h5 className="d-inline">Debes cumplir con los siguientes requisitos para publicar un curso:</h5>
                    </div>
                    <div className="col-lg-12 mt-2">
                        <h5>- El curso debe tener como mínimo un tema.</h5>
                    </div>
                    <div className="col-lg-12">
                        <h5>- Los temas del curso deben tener como mínimo un contenido.</h5>
                    </div>
                    <div className="col-lg-12">
                        <h5>- El curso debe tener como mínimo 5 preguntas con sus respectivas opciones.</h5>
                    </div>
                </div>
            )
        }
        return (
            <div className="row d-flex justify-content-center">
                <div className="col-auto">
                    <Spinner />
                </div>
            </div>
        );
    }

    render (){
        console.log(this.props.course)
        return(
            <>
                <div style={{ height: "100vh"}}>
                    <Modal 
                        title = "Publicar curso"
                        description = {this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push('/Teacher')}
                    />
                </div>
            </>
        );
    }
}

export default connect(null,{postCourse})(CoursePost);