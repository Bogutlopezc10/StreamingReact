import React from 'react';
import {Field, reduxForm} from 'redux-form';

class CourseForm extends React.Component {

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
    
    renderInput = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off" placeholder="Ingrese el nombre del curso"/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderTextArea = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} placeholder="Ingrese la descripción del curso" style={{ height: "100px"}} />
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
        this.props.onSubmit(formValues);
    }

    render(){
        const {pristine, reset, submitting } = this.props
        const {categories, textButton } = this.props;
        
        return(
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" type="text" component={this.renderInput} label="Nombre" />
                <Field name="description" component={this.renderTextArea} label="Descripción" />
                <Field name="categoryId" component={this.renderSelect} label="Categorias">
                        <option value="">Seleccione una categoria</option>
                        { categories.map(category =>
                        <option key ={category.id} value={category.id}>{category.name}</option>) }
                </Field>
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
    if (!formValues.name){
        errors.name = 'Debes ingresar el nombre'
    }
    if (!formValues.description){
        errors.description = 'Debes ingresar la descripción'
    }

    if (!formValues.categoryId){
        errors.categoryId = 'Debes seleccionar una categoria'
    }
    return errors;
}
export default  reduxForm({
    form: 'courseForm',
    validate
})(CourseForm);