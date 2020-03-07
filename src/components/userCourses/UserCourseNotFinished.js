import React from 'react';
import UserCourse from './UserCourse';
import './UserCourse.css';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';

class UserCourseNotFinishedList extends React.Component{
    
    renderData = () =>{
        const { userCoursesLoading, userCoursesNotFinished } = this.props;

        if(userCoursesNotFinished.length == 0 && userCoursesLoading){
            return(
                <>  
                    <div className="row d-flex align-items-center justify-content-center mb-4" style={{height:"172px", marginRight:"0px"}}>
                        <div className="col-auto">
                            <Spinner />
                        </div>
                    </div>  
                </>
            )
        }
        else if(userCoursesNotFinished.length == 0 && !userCoursesLoading){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center mb-4" style={{height:"172px", marginRight:"0px"}}>
                        <div className="col-auto">
                            <EmptyData 
                                message="No tienes cursos en curso." 
                                heightImage="110px"
                                widthImage="110px" 
                            />
                        </div>
                    </div>  
                </>
            )
        }
        return(
            <>
                 { userCoursesNotFinished.map( userCourse =>
                    <UserCourse key={userCourse.id} userCourse={userCourse} />
                )}
            </>
        )
    }
    render(){
        const { borderTopColor } = this.props;
        return (
            <>
                <div className="container mb-3">
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-start">
                                <h1 className="title-published">En curso</h1>
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

export default UserCourseNotFinishedList;