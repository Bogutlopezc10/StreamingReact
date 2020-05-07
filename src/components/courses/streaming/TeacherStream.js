import React from 'react'
import {updateIsStreamingCourse} from '../../../actions/course'
import {connect} from 'react-redux'
import Spinner from '../../Spinner';
import './Stream.css'

class TeacherStream extends React.Component {

    renderParametersLive(){
        const {course} = this.props;
        if(course.isStreaming){
            return(
                <>
                    <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
                        <img src="/live.png" className="live-image" alt="avatar image" />
                    </div>
                    <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
                        <p><strong>¡El curso se está transmitiendo en vivo!</strong></p>
                    </div>
                    <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
                        <p>
                            Para detener el streaming debes de parar la transmisión en
                            Open Broadcaster Software, y darle en el botón detener
                        </p>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <button className="btn mb-4 btn-outline-danger" onClick = {()=>this.props.updateIsStreamingCourse(course.id, false)}>
                            <div>
                                <p className="d-inline">DETENER TRANSMISION</p>
                                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                            </div>
                        </button>                
                    </div> 
                </>
            )
        }
        return(
            <>
                <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
                    <img src="/live.png" className="live-image" alt="avatar image" />
                </div>
                <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
                    <p>
                        Para realizar el streaming debes de abrir
                        Open Broadcaster Software, ir a ajustes, y en la parte de transmision poner lo siguiente:
                    </p>
                </div>
                <div className="col-12 mb-2 d-flex align-items-center justify-content-center">
                    <span><strong>Servidor:</strong> rtmp://localhost/live</span>
                </div>
                <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
                    <span><strong>Clave de retransmisión:</strong> {course.id}</span>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <button className="btn mb-4 btn-outline-success" onClick = {()=>this.props.updateIsStreamingCourse(course.id, true)}>
                        <div>
                            <p className="d-inline">INICIAR TRANSMISION</p>
                            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                        </div>
                    </button>                
                </div> 
            </>
        )
    }

    render(){
        if(!this.props.course){
            return(
                <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: this.props.borderTopColor }}>
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"300px"}}>
                            <Spinner />
                        </div>
                    </div>
                </div>
            )
        }
        return(
            <>
                <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: this.props.borderTopColor }}>
                    <div className="row live-container">
                        {this.renderParametersLive()}
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, {updateIsStreamingCourse})(TeacherStream);