import React from 'react';
import {Field, reduxForm} from 'redux-form'

class CourseForm extends React.Component {

    constructor(props){
        super(props);
    }


    renderError({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input}  autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    }
    renderTextArea = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <textarea {...input} />
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
        const {categories} = this.props;
        
        return(
            <form 
                onSubmit ={this.props.handleSubmit(this.onSubmit)} 
                className="ui form error">
                <Field name = "name" component={this.renderInput} label = "Nombre"/>
                <Field name = "description" component={this.renderTextArea} label="Descripción"/>
                <Field name="categoryId" component={this.renderSelect} label="categorias">
                        <option value="">Seleccione una categoria</option>
                        { categories.map(category =>
                        <option key ={category.id} value={category.id}>{category.name}</option>) }
                </Field>
                <button className ="btn btn-primary" disabled={pristine || submitting}>Submit</button>
                <button type="button" className="btn btn-default" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </form>
        );
    }
}

const validate = (formValues) => {

    const errors ={};
    if (!formValues.name){
        errors.name = 'Debes de ingresar el nombre'
    }
    if (!formValues.description){
        errors.description = 'Debes de ingresar la descripcion'
    }

    if (!formValues.categoryId){
        errors.categoryId = 'Debes de seleccionar una categoria'
    }
    return errors;
}
export default  reduxForm({
    form: 'courseForm',
    validate
})(CourseForm);