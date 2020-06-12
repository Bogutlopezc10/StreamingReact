import React from 'react';
import UserCourse from './UserCourse';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import './UserCourse.css';

class UserCourseFinishedList extends React.Component{

    renderData = () =>{
        const {userCoursesFinished, userCoursesLoading } = this.props;

        if(userCoursesFinished.length === 0 && userCoursesLoading){
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
        else if(userCoursesFinished.length === 0 && !userCoursesLoading){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center mb-4" style={{height:"172px", marginRight:"0px"}}>
                        <div className="col-auto">
                            <EmptyData 
                                message="No has finalizado ningún curso." 
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
                                <h1 className="title-published">Finalizados</h1>
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