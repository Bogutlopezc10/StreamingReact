import React from 'react'
import {Link} from 'react-router-dom'

class ValidateAnswers extends React.Component{

    renderButton(){
        const {courseId, userCourseId} = this.props;
        return(
            <Link to={`/Player/${courseId}/${userCourseId}`} className="btn btn-primary">
                Volver al curso
            </Link>
        )
    }
    validateExam(){
        const {userCourse, courseId, userCourseId} = this.props;
        if(!userCourse){
            return(
                <div>
                    Loading........
                </div>
            )
        }
        if(userCourse.correctAnswers >= 3){
            return(
                <>
                    <h1>HAS GANADO EL EXAMEN</h1>
                    <h2>sacaste: {userCourse.correctAnswers}/5</h2>
                    <button className="btn btn-primary">Descargar Pdf</button>
                    <br></br>
                    {this.renderButton()}
                </>
            )
        }
        return(
            <>
                <h1>HAS PERDIDO EL EXAMEN</h1> 
                <h2>sacaste: {userCourse.correctAnswers}/5</h2>
                <Link to={`/questions/exam/${courseId}/${userCourseId}`} className="btn btn-primary">
                    Realizar de nuevo el examen
                </Link>
                <br></br>
                {this.renderButton()}
            </>
        )
    }
    render(){
        return(
            <>
                {this.validateExam()}
            </>
        )
    }
}

export default ValidateAnswers;