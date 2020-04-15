import React from 'react'
import {updateIsStreamingCourse} from '../../../actions/course'
import {connect} from 'react-redux'
import { createUserCourse } from '../../../actions/userCourse';

class TeacherStream extends React.Component {


    renderButtonsStream(){
        const {course} = this.props;
        if(course.isStreaming){
            return(
                <button className ="btn btn-danger" onClick = {()=>this.props.updateIsStreamingCourse(course.id, false)}>Detener</button>
            )
        }
        return(
            <button className = "btn btn-primary" onClick = {()=>this.props.updateIsStreamingCourse(course.id, true)}>Empezar</button>
        )
    }

    renderParametersLive(){
        const {course} = this.props;
        if(course.isStreaming){
            return(
                <>
                    <p>
                        Para detener el streaming debes de parar la transmisión en
                        Open Broadcaster Software, y darle en el botón detener
                    </p>
                </>
            )
        }
        return(
            <>
                <p>
                    Para realizar el streaming debes de abrir
                    Open Broadcaster Software, ir a ajustes, y en la parte de transmision poner lo siguiente
                </p>
                <span>Servidor: rtmp://localhost/live</span>
                <br></br>
                <span>Clave de retransmisión: {course.id}</span>
            </>
        )
    }

    render(){
        if(!this.props.course){
            return(
                <>
                    Loading.....
                </>
            )
        }
        return(
            <>
                {this.renderButtonsStream()}
                {this.renderParametersLive()}
            </>
        )
    }
}

export default connect(null, {updateIsStreamingCourse})(TeacherStream);