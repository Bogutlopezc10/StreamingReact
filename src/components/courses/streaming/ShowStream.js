import React from 'react'
import Spinner from '../../Spinner';
import './Stream.css'
import Hls from 'hls.js';

class ShowStream extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.videoRef = React.createRef();
    this.hls = new Hls();
  }

  componentDidMount() {
    const video = this.videoRef.current;
    let {urlStream} = this.props;

    if(urlStream === null){
      urlStream = ""
    }
    // load hls video source base on hls.js
    if (Hls.isSupported()) {
      this.hls.loadSource(urlStream);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  }

  componentWillUnmount() {
    if (this.hls) {
      this.hls.destroy();
    }
  }

  MaysFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderDataCourse = () => {
    const { course } = this.props;
    if (!course) {
      return (
        <div className="col-lg-12">
          <div className="container container-course-player">
            <div className="row d-flex align-items-center justify-content-center" style={{ height: "200px" }}>
              <div className="col-auto">
                <Spinner />
              </div>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="col-lg-12">
        <div className="container container-course-player">
          <div className="row mt-4 info-course-player">
            <div className="col-lg-6">
              <h2 className="d-flex justify-content-center">Información del curso</h2>
              <hr />
              <div className="row mb-4">
                <div className="col-lg-4 mt-1 mb-2 course-img-container">
                  <img src={`${course.photo}`} className="img-course-player" alt="bg-home" />
                </div>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-12">
                      <span><strong>Descripción: </strong>{course.description}</span>
                    </div>
                    <div className="col-lg-12">
                      <span><strong>Categoría: </strong>{course.categoryName}</span>
                    </div>
                    <div className="col-lg-12">
                      <span><strong>Estudiantes matriculados: </strong>{course.enrolledStudents}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="d-flex justify-content-center">Contacto</h2>
              <hr />
              <div className="row">
                <div className="col-lg-12 img-teacher mt-1 mb-3 d-flex align-items-center justify-content-center">
                  <img src={course.photoTeacher} width="50" height="50" className="rounded-circle d-inline z-depth-0"
                    alt="photoTeacherStream" />
                  <p className="d-inline text-contact-teacher ml-3">{`${this.MaysFirst(course.nameTeacher)} `}</p>
                </div>
                <div className="col-lg-12 mb-3 d-flex justify-content-center">
                  <span><strong>Email: </strong>{course.emailTeacher}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="container course-shadow container-published mb-5" style={{ borderTopColor: this.props.borderTopColor }}>
          <div className="row">
            <div className="col-lg-12 pl-0 pr-0">
              <video ref={this.videoRef} className="video-live" controls />
            </div>
            {this.renderDataCourse()}
          </div>
        </div>
      </>
    )
  }
}

export default ShowStream;
