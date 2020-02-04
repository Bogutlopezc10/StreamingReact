import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {deleteCourse} from '../../actions/course'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class CourseDelete extends React.Component{

    renderActions(){
        const id = this.props.courseId;
        return(
            <>
            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>this.props.deleteCourse(id)}>Confirmar</button>
            <button  type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>history.push('/Teacher')}>Cancelar</button>
        </>
        );
    }
    renderContent(){
        if(!this.props.course){
            return 'estas seguro que quieres eliminar este curso?'
        }
        return `estas seguro que quieres eliminar el curso con nombre:  ${this.props.course.name}`
    }
    render(){
        
        return (
            <>
                <h1>Eliminar curso</h1>
                <Modal 
                    title = "eliminar curso"
                    description ={this.renderContent()}
                    actions ={this.renderActions()}
                    onDismiss={()=> history.push('/Teacher')}
                />
            </>
        );
    }
}

export default connect(null, {deleteCourse})(CourseDelete);