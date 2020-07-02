import React from 'react'
import { updateIsStreamingCourse } from '../../../actions/course'
import { saveStreamUrl } from '../../../actions/auth'
import { connect } from 'react-redux'
import Spinner from '../../Spinner';
import './Stream.css'

class TeacherStream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (event.target.value === '') {
      this.setState({ error: true });
    }
    else {
      this.setState({ error: false });
    }
  }

  startStream = () => {
    const { course } = this.props;
    if (this.state.value === '') {
      this.setState({ error: true });
    }
    else {
      this.setState({ error: false });
      this.props.updateIsStreamingCourse(course.id, true)
      this.props.saveStreamUrl(this.state.value);
    }
  }

  stopStream = () => {
    const { course } = this.props;
    const url = "";
    this.props.updateIsStreamingCourse(course.id, false)
    this.props.saveStreamUrl(url)
  }
  renderParametersLive() {
    const { course } = this.props;
    if (course.isStreaming) {
      return (
        <>
          <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
            <img src="/live.png" className="live-image" alt="photoLive" />
          </div>
          <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
            <p><strong>¡El curso se está transmitiendo en vivo!</strong></p>
          </div>
          <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
            <p>
              Para detener el streaming debes primero detener el evento en vivo de <strong>Microsoft Azure Portal</strong>, luego
              detener la transmisión de <strong>Open Broadcaster Software</strong> y por último darle click en el botón detener
            </p>
          </div>
          <div className="col-12 d-flex align-items-center justify-content-center">
            <button className="btn mb-4 btn-outline-danger" onClick={this.stopStream}>
              <div>
                <p className="d-inline">DETENER TRANSMISION</p>
                <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
              </div>
            </button>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="col-12 mb-4 d-flex align-items-center justify-content-center">
          <img src="/live.png" className="live-image" alt="photoTeacherStreaming" />
        </div>
        <div className="col-12 mb-3 d-flex align-items-center justify-content-center live-description">
          <p>
            Para realizar el streaming debes tener una cuenta en <strong>Microsoft Azure Portal</strong>, tener instalado el <strong>Open Broadcaster Software</strong> en tu computador y seguir las siguientes instrucciones:
          </p>
        </div>
        <div className="col-12 mb-4 d-flex align-items-center justify-content-center live-description">
          <a href="https://www.youtube.com/watch?v=2TOj-t-_EYw" target="_blank" rel="noopener noreferrer">Ver instrucciones</a>
        </div>
        <div className="col-12 mb-2 d-flex align-items-center justify-content-center">
          <strong><span>Ingrese la URL del streaming</span></strong>
        </div>
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="col-8">
            <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} autoComplete="off" placeholder="URL del streaming" />
          </div>
        </div>
        <div className="col-12 mb-4 d-flex align-items-center field justify-content-center">
          {this.state.error && (
            <div className="mt-2 error-message">
              <i className="d-inline fas fa-exclamation-circle"></i>
              <p className="d-inline ml-2">Debes ingresar una URL</p>
            </div>
          )}
        </div>
        <div className="col-12 d-flex align-items-center justify-content-center">
          <button className="btn mb-4 btn-outline-success" onClick={this.startStream}>
            <div>
              <p className="d-inline">INICIAR TRANSMISION</p>
              <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
            </div>
          </button>
        </div>
      </>
    )
  }

  render() {
    if (!this.props.course) {
      return (
        <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: this.props.borderTopColor }}>
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{ height: "300px" }}>
              <Spinner />
            </div>
          </div>
        </div>
      )
    }
    return (
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

export default connect(null, { updateIsStreamingCourse,saveStreamUrl })(TeacherStream);
