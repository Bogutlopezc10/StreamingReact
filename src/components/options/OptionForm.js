import React from 'react';
import {Field, reduxForm} from 'redux-form';

class OptionForm extends React.Component {

    constructor(props){
        super(props);
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
    
    renderInput = ({input, meta, type})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <input {...input} type={type}/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderTextArea = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} placeholder="Ingrese la descripción de la opción" style={{ height: "100px"}} />
                {this.renderError(meta)}
            </div>
        );
    }

    renderSelect = ({input, label, meta, children })=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <select {...input}>
                    {children}
                </select>
                {this.renderError(meta)}
            </div>
        );
    }
    
    onSubmit = (formValues)=>{

        if(formValues.isCorrect == "isCorrect1"){
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
        if(formValues.isCorrect == "isCorrect2"){
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
        if(formValues.isCorrect == "isCorrect3"){
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
        if(formValues.isCorrect == "isCorrect4"){
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
                <Field name="opcion1" component={this.renderTextArea} label="Opción 1" />
                <Field name="opcion2" component={this.renderTextArea} label="Opción 2" />
                <Field name="opcion3" component={this.renderTextArea} label="Opción 3" />
                <Field name="opcion4" component={this.renderTextArea} label="Opción 4" />
                <div>
                    <label>
                        <Field name="isCorrect" component={this.renderInput} type="radio" value="isCorrect1" checked={true}/>{' '}
                        Opcion1
                    </label>
                    <label>
                        <Field name="isCorrect" component={this.renderInput} type="radio" value="isCorrect2" />{' '}
                        Opcion2
                    </label>
                    <label>
                        <Field name="isCorrect" component={this.renderInput} type="radio" value="isCorrect3" />{' '}
                        Opcion3
                    </label>
                    <label>
                        <Field name="isCorrect" component={this.renderInput} type="radio" value="isCorrect4" />{' '}
                        Opcion4
                    </label>
                </div>
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
        errors.opcion1 = 'campo obligatotorio'
    }
    if (!formValues.opcion2){
        errors.opcion2 = 'campo obligatotorio'
    }
    if (!formValues.opcion3){
        errors.opcion3 = 'campo obligatotorio'
    }
    if (!formValues.opcion4){
        errors.opcion4 = 'campo obligatotorio'
    }
    if (!formValues.isCorrect){
        errors.isCorrect = 'debes de elegir alguna de las opciones como correcta'
    }

    return errors;
}
export default  reduxForm({
    form: 'optionForm',
    validate
})(OptionForm);