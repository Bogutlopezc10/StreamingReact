import React from 'react';
import SubjectForm from './SubjectForm';
import { createSubject } from '../../actions/subject';
import { connect } from 'react-redux';
import './Subject.css';

class SubjectCreate extends React.Component{

    onSubmit = (formValues)=>{
        this.props.createSubject(formValues, this.props.courseId);
    }

    renderCreateForm = () => {
        if(this.props.isCreating){
            return (
                <>
                    <div className="col-12 shadow mb-4 create-form p-3">
                        <SubjectForm onSubmit={this.onSubmit} textButton="LIMPIAR" />
                    </div>
                </>
            )
        }

        return <></>
    }

    renderButtton = () => {
        if(!this.props.isCreating){
            return(
                <div className="row d-flex justify-content-end">
                    <div className="col-auto">
                        <button onClick={this.props.onClickIsCreating} className="btn btn-outline-success">
                            <div>
                                <p className="d-inline">CREAR TEMA</p> 
                                <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                </div>
            );
        }

        return(
            <div className="row d-flex justify-content-end">
                <div className="col-auto">
                    <button onClick={this.props.onClickIsNotCreating} className="btn btn-outline-danger">
                        <div>
                            <p className="d-inline">CANCELAR</p> 
                            <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div className="container">
                {this.renderButtton()}
                <div className="row mt-3 d-flex justify-content-start">
                    {this.renderCreateForm()}
                </div>
            </div>
        )
    }
};

export default connect(null,{ createSubject })(SubjectCreate);