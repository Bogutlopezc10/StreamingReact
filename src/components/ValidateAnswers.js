import React from 'react'
import {Link} from 'react-router-dom'
import CreatePdf from '../components/CreatePdf'
import Spinner from './Spinner';
import './ValidateAnswer.css'

class ValidateAnswers extends React.Component{

    renderButton(){
        const {courseId, userCourseId} = this.props;
        return(
            <Link to={`/Player/${courseId}/${userCourseId}`} className="btn ml-1 btn-outline-danger">
                <div>
                    <p className="d-inline">AL CURSO</p>
                    <i className="d-inline fas fa-sign-out-alt ml-2 mt-2"></i>
                </div>
            </Link>
        )
    }

    renderData = () =>{
        const {userCourse, courseId, userCourseId} = this.props;
        if(!userCourse){
            return(
                <div className="row d-flex align-items-center justify-content-center" style={{height:"300px"}}>
                    <div className="col-auto">
                        <Spinner />
                    </div>
                </div>
            )
        }
        if(userCourse.correctAnswers >= 3){
            return(
                <>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <i className="color-icon-good fas fa-graduation-cap"></i>
                        </div>
                        <div className="col-lg-12 mt-1 d-flex justify-content-center">
                            <h1>¡Aprobaste!</h1> 
                        </div>
                        <hr/>
                        <div className="col-lg-12 mt-2 d-flex justify-content-center">
                            <h3>Tu puntuación fue: {userCourse.correctAnswers}/5 correctas.</h3>
                        </div>
                        <div className="col-lg-12 mt-2 d-flex justify-content-center">
                            <h5>Felicitaciones, terminaste con éxito el curso</h5>
                        </div>
                        <div className="col-lg-12 mt-1 d-flex justify-content-center">
                            <h5><strong>{userCourse.courseName}</strong></h5>
                        </div>
                        <div className="col-lg-12 mt-4 d-flex justify-content-center">
                            <CreatePdf
                                course = {userCourse}
                            />
                            {this.renderButton()}
                        </div>
                        </div>

                </>
            )
        }
        return(
            <>  

                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <i className="far color-icon-bad fa-times-circle"></i>
                    </div>
                    <div className="col-lg-12 mt-1 d-flex justify-content-center">
                        <h1>¡No aprobaste!</h1> 
                    </div>
                    <div className="col-lg-12 mt-2 d-flex justify-content-center">
                        <h3>Tu puntuación fue: {userCourse.correctAnswers}/5 correctas.</h3>
                    </div>
                    <div className="col-lg-12 mt-3 d-flex justify-content-center">
                        <h5>No te rindas <strong>¡Sigue intentando!</strong></h5>
                    </div>
                    <div className="col-lg-12 mt-4 d-flex justify-content-center">
                        <Link to={`/questions/exam/${courseId}/${userCourseId}`} className="btn mr-1 btn-outline-exam">
                            <div>
                                <p className="d-inline">REINTENTAR</p>
                                <i className="d-inline fas fa-redo ml-2 mt-2"></i>
                            </div>
                        </Link>
                        {this.renderButton()}
                    </div>
                </div>

            </>
        )
    }
    render(){
        return(
            <>
                 <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div className="container course-shadow container-result py-4 px-4">
                            {this.renderData()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ValidateAnswers;