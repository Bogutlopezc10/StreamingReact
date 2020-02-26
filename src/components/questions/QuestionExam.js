import React from 'react'
import {reduxForm} from 'redux-form';
import OptionExamListContainer from '../../containers/options/OptionExamListContainer'
import './Question.css'

class QuestionExam extends React.Component{

    onSubmit = (formValues)=>{
        const optionsValForm = Object.values(formValues);

        if(optionsValForm.length == 5){

            const answersExam ={
                options:optionsValForm,
                userCourseId:this.props.userCourseId
            }
            this.props.onSubmit(answersExam, this.props.courseId, this.props.userCourseId);
        }
    }
    render(){
        const {pristine, submitting } = this.props
        const {questions} = this.props
        //console.log(questions);
        return(
            <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: "#005385" }}>
                <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    { questions.map((question,i) => {
                        const numQuestion =  i + 1;
                        return(
                            <div key={numQuestion}>
                                <div className="row">
                                    <div className="col-lg-12 question-exam mt-1 mb-2">
                                        <h5>{numQuestion}. {question.content}</h5>
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <OptionExamListContainer
                                            questionId ={question.id}
                                        />
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        )
                    })}
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <button className ="btn btn-outline-success mt-1 mb-4" disabled={pristine || submitting} style={{ borderRadius: ".25rem" }}>
                                <div>
                                    <p className="d-inline">ENVIAR</p> 
                                    <i className="d-inline fas fa-share ml-2 mt-2"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default  reduxForm({
    form: 'examForm'
})(QuestionExam);