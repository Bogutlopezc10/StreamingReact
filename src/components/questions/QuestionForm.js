import React from 'react';
import {Field, reduxForm} from 'redux-form';

class QuestionForm extends React.Component {

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
    
    renderInput = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" placeholder="Ingrese la pregunta"/>
                {this.renderError(meta)}
            </div>
        );
    }
    
    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues);
    }

    render(){
        const {pristine, reset, submitting } = this.props
        const { textButton } = this.props;
        
        return( 
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="content" type="text" component={this.renderInput} label="Nombre" />
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
    if (!formValues.content){
        errors.content = 'Debes ingresar el contenido de la pregunta'
    }
    return errors;
}
export default  reduxForm({
    form: 'questionForm',
    validate
})(QuestionForm);