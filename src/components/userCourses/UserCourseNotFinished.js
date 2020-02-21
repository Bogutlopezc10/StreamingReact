import React from 'react';
import UserCourse from './UserCourse';
import './UserCourse.css';
import { Link } from 'react-router-dom';

class UserCourseNotFinishedList extends React.Component{
    render(){
        const { borderTopColor, userCoursesNotFinished } = this.props;
        return (
            <>
                <div className="container mb-3">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-start">
                                <h1 className="title-published">Mis cursos no terminados</h1>
                            </div>
                        </div>
                </div>
                <div className="container course-shadow container-usercourse pt-4 px-4 mb-5 usercourse-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="card-group">
                        { userCoursesNotFinished.map( userCourse =>
                            <UserCourse key={userCourse.id} userCourse={userCourse} />
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default UserCourseNotFinishedList;