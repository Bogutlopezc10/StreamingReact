import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {deleteCourse} from '../../actions/course'
import {connect} from 'react-redux'
class CourseDelete extends React.Component{

    renderActions(){
        const id = this.props.courseId;
        return(
            <>
                <button type="button" className="btn course-button mr-3" data-dismiss="modal" onClick={()=>this.props.deleteCourse(id)} style={{ borderRadius: ".25rem" }}>
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
        if(!this.props.course){
            return <><h5>Estas seguro que quieres eliminar este curso?</h5></>
        }
        return (
            <>
                <h5 className="d-inline">Estas seguro que quieres eliminar el curso con nombre: </h5>
                <p className="d-inline">{this.props.course.name}</p>
            </>
        );
    }
    render(){
        
        return (
            <>
                <div style={{ height: "100vh" }}>
                    <Modal 
                        title = "Eliminar curso"
                        description ={this.renderContent()}
                        backgroundHeaderColor = {this.props.backgroundHeaderColor}
                        actions ={this.renderActions()}
                        onDismiss={()=> history.push('/Teacher')}
                    />
                </div>
            </>
        );
    }
}

export default connect(null, {deleteCourse})(CourseDelete);