import React from 'react'
import {reduxForm, Field } from 'redux-form';
import OptionExam from '../../components/options/OptionExam'

class OptionExamList extends React.Component {

    onSubmit = (formValues)=>{
        const {currentNumberQuestion} = this.props;
        var endExam = false;
        if(currentNumberQuestion === 5){
            endExam = true;
            this.props.onSubmit(formValues, endExam);
        }
        else{
            this.props.onSubmit(null, endExam);
        }
        
    }

    renderButtonExam = ({ meta }) => {
        const {currentNumberQuestion} = this.props;
        if(meta.error === true){
            if(currentNumberQuestion === 5){
                return(
                    <button className ="btn btn-outline-exam mt-1 mb-4" disabled style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">FINALIZAR</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }else{
                return(
                    <button className ="btn btn-outline-exam mt-1 mb-4" disabled style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">SIGUIENTE</p> 
                            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }
        }else{
            if(currentNumberQuestion === 5){
                return(
                    <button className ="btn btn-outline-exam mt-1 mb-4" style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">FINALIZAR</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }else{
                return(
                    <button className ="btn btn-outline-exam mt-1 mb-4" style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">SIGUIENTE</p> 
                            <i className="d-inline fas fa-angle-double-right ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }
        }
        
    }

    renderIconNumberQuestion = (currentNumberQuestion) =>{
        if(currentNumberQuestion === 1){
            return(
                <img src="/QuestionIcon1.png" className="img-question-icon" alt="question-1" />
            )
        }else  if(currentNumberQuestion === 2){
            return(
                <img src="/QuestionIcon2.png" className="img-question-icon" alt="question-2" />
            )
        }else  if(currentNumberQuestion === 3){
            return(
                <img src="/QuestionIcon3.png" className="img-question-icon" alt="question-3" />
            )
        }else  if(currentNumberQuestion === 4){
            return(
                <img src="/QuestionIcon4.png" className="img-question-icon" alt="question-4" />
            )
        }else{
            return(
                <img src="/QuestionIcon5.png" className="img-question-icon" alt="question-5" />
            )
        }
    }
    render(){
        const {currentQuestionExam, currentNumberQuestion} = this.props;
        return(
            <>
                <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <div className="row question-title d-flex justify-content-center">
                        <div className="col-auto">
                            {this.renderIconNumberQuestion(currentNumberQuestion)}
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-12 question-exam mt-1 mb-2">
                            <h5>{currentQuestionExam.content}</h5>
                        </div>
                        <div className="col-lg-12 mb-2">
                            <div className="row">
                                { this.props.options.map( option =>
                                    <OptionExam 
                                        key={option.id}
                                        option={option}
                                        numQuestion = {currentNumberQuestion}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <Field name={`opcion${currentNumberQuestion}`} component={this.renderButtonExam}/>
                        </div>
                    </div>
                </form>           
            </>
        )
    }
}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.opcion1){
        errors.opcion1 = true
    }
    if (!formValues.opcion2){
        errors.opcion2 = true
    }
    if (!formValues.opcion3){
        errors.opcion3 = true
    }
    if (!formValues.opcion4){
        errors.opcion4 = true
    }
    if (!formValues.opcion5){
        errors.opcion5 = true
    }
    return errors;
}

export default reduxForm({
    form: 'examForm',
    validate
})(OptionExamList);