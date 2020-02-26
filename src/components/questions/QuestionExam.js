import React from 'react'
import {reduxForm} from 'redux-form';
import OptionExamListContainer from '../../containers/options/OptionExamListContainer'

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
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div>
                    { questions.map( question => 
                        <>
                            <div>
                                {question.content}
                            </div>
                            <div>
                                <OptionExamListContainer
                                    questionId ={question.id}
                                />
                                <br></br>
                            </div>
                        </>
                    )}
                </div>
                <button className ="btn btn-outline-success mt-2" disabled={pristine || submitting} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">ENVIAR</p> 
                        <i className="d-inline fas fa-share ml-2 mt-2"></i>
                    </div>
                </button>
            </form>
        )
    }
}

export default  reduxForm({
    form: 'examForm'
})(QuestionExam);