import React from 'react';
import {Field, reduxForm} from 'redux-form';

class CourseForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            file: null,
            name:null,
            isError: false
        };
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
    renderInputFile = ({input, label, meta})=> {
        const className =`field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
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

        const {isEditing} = this.props;
        const formData = new FormData();
        formData.append('photo',this.state.file)

        if(!isEditing){
            if(this.state.file != null){
                this.props.onSubmit(formValues,formData);
            }
        }
        else{
            this.props.onSubmit(formValues,formData);
        }
    }
    setFile(e) {
        this.setState({ file: e.target.files[0],isError:false,name:e.target.files[0].name});
    }

    renderErrorInputFile(){
        const {isEditing} = this.props;
        if(!isEditing){
            if(this.state.isError){
                return(
                    <div className="mt-2 error-message">
                        <i className="d-inline fas fa-exclamation-circle"></i>
                        <p className="d-inline ml-2">Debes de seleccionar una imagen</p>
                    </div>
                )
            }
        }
    }

    validateDisable = ()=>{
        const {pristine} = this.props;
        if(this.state.file == null && pristine){
            return true;
        }
        else{
            return false;
        }
    }

    reset=()=>{
        this.props.reset()
        this.setState({ file: null,name:null});
    }

    onClickSend = () =>{
        if(this.state.file == null){
            this.setState({ isError: true});
        }
    }

    renderButtonSubmit (){
        const {isCreating} = this.props;
        if(isCreating){
            return(
                <div>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <p className="d-inline">ENVIANDO</p> 
                    <i className="d-inline fas fa-share ml-2 mt-2"></i>
                </div>
            )
        }
        return(
            <div>
                <p className="d-inline">ENVIAR</p> 
                <i className="d-inline fas fa-share ml-2 mt-2"></i>
            </div>
        )
    }
    render(){
       
        const {categories, textButton} = this.props;
        return(
            <form onSubmit ={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <div className="row">
                    <div className="col-lg-6 mb-3">
                        <Field name="name" type="text" component={this.renderInput} label="Nombre" />
                    </div>
                    <div className="col-lg-6 mb-3">
                        <Field name="categoryId" component={this.renderSelect} label="Categoria">
                            <option value="">Seleccione una categoria</option>
                            { categories.map(category =>
                            <option key ={category.id} value={category.id}>{category.name}</option>) }
                        </Field>
                    </div>
                    <div className="col-lg-12 mb-3">
                        <Field name="description" component={this.renderTextArea} label="Descripción" />
                    </div>
                    <div className="col-lg-12 mb-3 custom-file">
                        <input className="custom-file-input form-control"
                            name = "photo"
                            type='file'
                            accept="image/x-png,image/gif,image/jpeg"
                            onChange={e => this.setFile(e)}
                        />
                        <label className="custom-file-label">{this.state.name==null ? 'Seleccione una imagen': this.state.name}</label>
                        {this.renderErrorInputFile()}
                    </div>
                </div>
                <button onClick = {this.onClickSend} className ="btn btn-outline-success mt-2" disabled={this.validateDisable()} style={{ borderRadius: ".25rem" }}>
                   {this.renderButtonSubmit()}
                </button>
                <button className ="btn course-button ml-4 mt-2" disabled={this.validateDisable()} onClick={this.reset} style={{ borderRadius: ".25rem" }}>
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