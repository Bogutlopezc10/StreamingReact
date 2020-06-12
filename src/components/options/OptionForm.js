import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './Option.css'

class OptionForm extends React.Component {
    
    renderSelectError({meta}){
        if(meta.touched && meta.error){
            return(
                <div className="mb-3 error-message">
                    <i className="d-inline fas fa-exclamation-circle"></i>
                    <p className="d-inline ml-2">{meta.error}</p>
                </div>
            );
        }

        return '';
    }

    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="mt-2 error-message">
                    <i className="d-inline fas fa-exclamation-circle"></i>
                    <p className="d-inline ml-2">{error}</p>
                </div>
            );
        }
    }
    
    renderInput = ({input, label, meta, type})=> {
        const className =`field d-flex justify-content-center ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <span className="option-label">{label}</span>
                <input className="mt-1 ml-2" {...input} type={type}/>
            </div>
        );
    }

    renderTextArea = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} placeholder="Ingrese el contenido de la opción" style={{ height: "100px"}} />
                {this.renderError(meta)}
            </div>
        );
    }
    
    onSubmit = (formValues)=>{

        if(formValues.isCorrect === "isCorrect1"){
           this.options = {
                    options: [
                      {
                        content: formValues.opcion1,
                        isCorrect: true
                      },
                      {
                        content: formValues.opcion2,
                        isCorrect: false
                      },
                      {
                        content: formValues.opcion3,
                        isCorrect: false
                      },
                      {
                        content: formValues.opcion4,
                        isCorrect: false
                      }

                    ],
                    questionId: this.props.questionId
            }
        }
        if(formValues.isCorrect === "isCorrect2"){
            this.options = {
                options: [
                  {
                    content: formValues.opcion1,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion2,
                    isCorrect: true
                  },
                  {
                    content: formValues.opcion3,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion4,
                    isCorrect: false
                  }

                ],
                questionId: this.props.questionId
            }
        }
        if(formValues.isCorrect === "isCorrect3"){
            this.options = {
                options: [
                  {
                    content: formValues.opcion1,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion2,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion3,
                    isCorrect: true
                  },
                  {
                    content: formValues.opcion4,
                    isCorrect: false
                  }

                ],
                questionId: this.props.questionId
            }
        }
        if(formValues.isCorrect === "isCorrect4"){
            this.options = {
                options: [
                  {
                    content: formValues.opcion1,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion2,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion3,
                    isCorrect: false
                  },
                  {
                    content: formValues.opcion4,
                    isCorrect: true
                  }

                ],
                questionId: this.props.questionId
            }
        }

        this.props.onSubmit(this.options)
    }

    render(){
        const {pristine, reset, submitting } = this.props
        const {textButton } = this.props;
        
        return(
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <Field name="opcion1" component={this.renderTextArea} label="Opción 1" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <Field name="opcion2" component={this.renderTextArea} label="Opción 2" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <Field name="opcion3" component={this.renderTextArea} label="Opción 3" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <Field name="opcion4" component={this.renderTextArea} label="Opción 4" />
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-auto field">
                        <label>Elige la opción correcta</label>
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <label>
                            <Field name="isCorrect" component={this.renderInput} type="radio" label="Opción 1" value="isCorrect1" checked={true}/>{' '}
                        </label>
                    </div>
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <label>
                            <Field name="isCorrect" component={this.renderInput} type="radio" label="Opción 2" value="isCorrect2" />{' '}
                        </label>
                    </div>
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <label>
                            <Field name="isCorrect" component={this.renderInput} label="Opción 3" type="radio" value="isCorrect3" />{' '}
                        </label>
                    </div>
                    <div className="col-auto d-flex align-items-center justify-content-center">
                        <label>
                            <Field name="isCorrect" component={this.renderInput} label="Opción 4" type="radio" value="isCorrect4" />{' '}
                        </label>
                    </div>
                </div>
                <Field name="isCorrect" component={this.renderSelectError}/>
                <button className ="btn btn-outline-success mt-2" disabled={pristine || submitting} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">ENVIAR</p> 
                        <i className="d-inline fas fa-share ml-2 mt-2"></i>
                    </div>
                </button>
                <button className ="btn course-button ml-4 mt-2" disabled={pristine || submitting} onClick={reset} style={{ borderRadius: ".25rem" }}>
                    <div>
                        <p className="d-inline">{textButton}</p> 
                        <i className="d-inline fas fa-eraser ml-2 mt-2"></i>
                    </div>
                </button>
            </form>
        );
    }
}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.opcion1){
        errors.opcion1 = 'Debes ingresar la opción'
    }
    if (!formValues.opcion2){
        errors.opcion2 = 'Debes ingresar la opción'
    }
    if (!formValues.opcion3){
        errors.opcion3 = 'Debes ingresar la opción'
    }
    if (!formValues.opcion4){
        errors.opcion4 = 'Debes ingresar la opción'
    }
    if (!formValues.isCorrect){
        errors.isCorrect = 'Debes elegir alguna de las opciones como correcta'
    }

    return errors;
}
export default  reduxForm({
    form: 'optionForm',
    validate
})(OptionForm);