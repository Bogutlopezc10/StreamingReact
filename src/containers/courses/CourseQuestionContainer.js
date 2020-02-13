import React from 'react'
import QuestionListContainer from '../../containers/questions/QuestionListContainer'
import MainHeader from '../../components/MainHeader';

class CourseQuestionContainer extends React.Component {

    render(){
        return(
            <>  
                <MainHeader backgroundHeaderColor="#005385" textHeader="Contenido del curso" />
                <QuestionListContainer 
                    courseName = {this.props.courseName}
                    id = {this.props.id}
                />
            </>
        )
    }
}

export default CourseQuestionContainer;