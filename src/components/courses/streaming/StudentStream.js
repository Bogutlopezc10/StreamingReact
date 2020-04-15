import React from 'react'
import {Link} from 'react-router-dom'

class StudentStream extends React.Component {


    renderInfoTeacher = () => {
        const { userCourse } = this.props;
        const starPercentage = (userCourse.rating / 5) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
            return(
                <div className="row">
                    <div className="col-lg-12 d-flex align-items-center justify-content-center">
                        <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" width="30" height="30" className="rounded-circle d-inline z-depth-0"
                        alt="avatar image"/>
                        <p className="d-inline ml-2">{`${userCourse.nameTeacher} `}</p>
                    </div>
                    <div className="col-lg-12 mt-2 d-flex align-items-center justify-content-center">
                        <div className="stars-outer">
                            <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                        </div>
                        <span className="number-rating ml-2 text-muted">{userCourse.rating}</span>
                    </div>
                </div>
            )
    }

    render(){
        const { userCourse } = this.props;
        return(
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-4">
                <div className="card shadow-sm h-100">
                    <img src={`${userCourse.photo}`} className="card-img" width="150" height="150" alt="bg-home" />
                    <div className="card-body">
                        <h5 className="card-title">{userCourse.courseName}</h5>
                    </div>
                    <div className="card-footer">
                        {this.renderInfoTeacher()}
                    </div>
                    <div className="card-badge rounded-right text-uppercase">{userCourse.categoryName}</div>
                    <Link to={`/courses/Detail/courseName/${userCourse.id}`} className={`btn course-button`}>
                        <div>
                            <p className="d-inline">IR A EN VIVO</p> 
                            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StudentStream;