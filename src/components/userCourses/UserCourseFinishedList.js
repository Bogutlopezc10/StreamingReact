import React from 'react';
import UserCourse from './UserCourse';
import './UserCourse.css';

class UserCourseFinishedList extends React.Component{

    renderData = () =>{
        const {userCoursesFinished, userCoursesLoading } = this.props;

        if(userCoursesFinished.length == 0 && userCoursesLoading){
            return(
                <>
                    LOADING..........
                </>
            )
        }
        else if(userCoursesFinished.length == 0 && !userCoursesLoading){
            return(
                <>
                    NO TIENES CURSOS TERMINADOS
                </>
            )
        }
        return(
            <>
                { userCoursesFinished.map( userCourse =>
                    <UserCourse key={userCourse.id} userCourse={userCourse} />
                )}
            </>
        )
    }
    render(){
        const { borderTopColor} = this.props;
        return (
            <>
                <div className="container mb-3">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-start">
                                <h1 className="title-published">Mis cursos terminados</h1>
                            </div>
                        </div>
                    </div>
                <div className="container course-shadow container-usercourse pt-4 px-4 mb-5 usercourse-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="card-group">
                        {this.renderData()}
                    </div>
                </div>
            </>
        );
    }
}

export default UserCourseFinishedList;