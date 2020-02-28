import React from 'react'
import {reduxForm, Field } from 'redux-form';
import OptionExam from '../../components/options/OptionExam'

class OptionExamList extends React.Component {
    onSubmit = (formValues)=>{
        console.log(formValues);
        const {currentNumberQuestion} = this.props;
        var endExam = false;
        if(currentNumberQuestion == 5){
            endExam = true;
            this.props.onSubmit(formValues, this.props.courseId, this.props.userCourseId, endExam);
        }else{
            this.props.onSubmit(null, this.props.courseId, this.props.userCourseId, endExam);
        }
        
    }

    renderButtonExam = ({ meta }) => {
        const {currentNumberQuestion} = this.props;
        if(meta.error == true){
            if(currentNumberQuestion == 5){
                return(
                    <button className ="btn btn-outline-success mt-1 mb-4" disabled style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">ENVIAR</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }else{
                return(
                    <button className ="btn btn-outline-success mt-1 mb-4" disabled style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">SIGUIENTE</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }
        }else{
            if(currentNumberQuestion == 5){
                return(
                    <button className ="btn btn-outline-success mt-1 mb-4" style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">ENVIAR</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }else{
                return(
                    <button className ="btn btn-outline-success mt-1 mb-4" style={{ borderRadius: ".25rem" }}>
                        <div>
                            <p className="d-inline">SIGUIENTE</p> 
                            <i className="d-inline fas fa-share ml-2 mt-2"></i>
                        </div>
                    </button>
                );
            }
        }
        
    }

    render(){
        const {currentQuestionExam, currentNumberQuestion} = this.props;
        return(
            <>
                <div className="container course-shadow container-published pt-4 px-4 mb-5" style={{ borderTopColor: "#005385" }}>
                    <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                        <div className="row">
                            <div className="col-lg-12 question-exam mt-1 mb-2">
                                <h5>{currentNumberQuestion}. {currentQuestionExam.content}</h5>
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
                </div>
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