import React from 'react'
import QuestionForm from '../../components/questions/QuestionForm'
import {createQuestion} from '../../actions/question'
import { connect } from 'react-redux';

class QuestionCreate extends React.Component {

    onSubmit = (formValues)=>{
        this.props.createQuestion(formValues, this.props.courseId);
    }
    renderCreateForm = () => {
        if(this.props.isCreating){
            return (
                <>
                    <div className="col-12 subject-shadow mb-4 create-form p-3">
                        <QuestionForm 
                         onSubmit={this.onSubmit} 
                         textButton="LIMPIAR"
                         />
                    </div>
                </>
            )
        }

        return <></>
    }

    renderButtton = () => {
        if(!this.props.isCreating){
            return(
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto">
                        <h1 className="title-published">Preguntas</h1>
                    </div>
                    <div className="col-auto">
                        <button onClick={this.props.onClickIsCreating} className="btn btn-outline-success">
                            <div>
                                <p className="d-inline">CREAR PREGUNTA</p> 
                                <i className="d-inline fas fa-cog ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                </div>
            );
        }

        return(
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h1 className="title-published">Preguntas</h1>
                </div>
                <div className="col-auto">
                    <button onClick={this.props.onClickIsNotCreating} className="btn btn-outline-danger">
                        <div>
                            <p className="d-inline">CANCELAR</p> 
                            <i className="d-inline fas fa-times ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    render(){
        return(
        <div className="container">
            {this.renderButtton()}
            <div className="row mt-3 d-flex justify-content-start">
                {this.renderCreateForm()}
            </div>
        </div>
        )
    }
}

export default connect(null, {createQuestion})(QuestionCreate);