import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import './Course.css'
import Spinner from '../Spinner';
import moment from 'moment'
import { Link } from 'react-router-dom';

class CourseDetail extends React.Component {

  renderButtons() {
    const { course, userCourses, onClickCreateUserCourse, loadingUserCourse, isAdmin, isTeacher } = this.props;
    const isEnroll = userCourses.find(e => e.courseId == course.id);

    if (!isAdmin && !isTeacher) {
      if (!isEnroll && loadingUserCourse) {
        return (
          <>
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-auto mt-1">
                <Spinner />
              </div>
            </div>
          </>
        )
      }
      else if (!isEnroll && !loadingUserCourse) {
        return (
          <button className="btn btn-block btn-outline-success" onClick={() => onClickCreateUserCourse(course.id)}>
            <div>
              <p className="d-inline">MATRICULARME</p>
              <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
            </div>
          </button>
        )
      }
      return (
        <Link to={`/player/${course.id}/${isEnroll.id}`} className="btn btn-block course-button">
          <div>
            <p className="d-inline">IR AL CURSO</p>
            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
          </div>
        </Link>
      )
    }
  }

  renderNewBadge = () => {
    const { course } = this.props;
    if (moment().diff(course.postedAt, 'days') <= 4) {
      return (
        <div className="card-badge-new rounded-right text-uppercase">Nuevo</div>
      )
    }
  }

  renderData = () => {
    const { course } = this.props;
    if (!course) {
      return (
        <>
          <div className="col-auto container-spinner d-flex align-items-center justify-content-center">
            <Spinner />
          </div>
        </>
      )
    } else {
      const starPercentage = (course.rating / 5) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      return (
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12">
                <div className="container-img">
                  <img src={`${course.photo}`} className="img-fluid" alt="course-detail" />
                  <div className="card-badge rounded-right text-uppercase">{course.categoryName}</div>
                  {this.renderNewBadge()}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 container-info-course">
            <div className="row">
              <div className="course-detail col-lg-12">
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <div className="col-lg-12 d-flex p-0 align-items-center justify-content-start">
                  <div className="stars-outer">
                    <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                  </div>
                  <span className="number-rating ml-2 text-muted">{course.rating}</span>
                </div>
              </div>
              <div className="col-lg-12 img-teacher mt-3 d-flex align-items-center justify-content-start">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="50" height="50" className="rounded-circle d-inline z-depth-0"
                  alt="avatar image" />
                <p className="d-inline text-muted ml-2">{`${course.nameTeacher}`}</p>
              </div>
              <div className="col-lg-12 info-teacher mt-2">
                <h6 className="d-inline">Contacto: </h6><p className="d-inline">{course.emailTeacher}</p>
              </div>
              <div className="col-lg-12 info-teacher mt-2">
                <h6 className="d-inline">Estudiantes Matriculados: </h6><p className="d-inline">{course.enrolledStudents}</p>
              </div>
              <div className="col-lg-12 info-teacher mt-2">
                <h6 className="d-inline">Publicado: </h6><p className="d-inline"><Moment format="DD/MM/YYYY">{course.postedAt}</Moment></p>
              </div>
              <div className="col-lg-12 mt-4">
                {this.renderButtons()}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    const { borderTopColor } = this.props;
    return (
      <>
        <div style={{ borderTopColor: borderTopColor }} className="container course-shadow container-published p-4">
          {this.renderData()}
        </div>
      </>
    );
  }
}

export default CourseDetail;
