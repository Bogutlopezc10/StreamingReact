import React from 'react';
import ContentForm from './ContentForm';
import { createContent } from '../../actions/content';
import { connect } from 'react-redux';

class ContentCreate extends React.Component{
    renderButton = () => {
        return(
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h1 className="title-content">Contenidos</h1>
                </div>
                <div className="col-auto">
                    <button onClick={this.props.onClickIsNotCreatingContent} className="btn btn-outline-danger">
                        <div>
                            <p className="d-inline">CANCELAR</p> 
                            <i className="d-inline fas fa-times ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    onSubmit = (formValues)=>{
        this.props.createContent(formValues, this.props.subjectId);
    }

    render(){
        return (
            <div className="container">
                {this.renderButton()}
                <hr/>
                <div className="row mt-3 d-flex justify-content-start">
                    <div className="col-12 shadow create-form p-3">
                        <ContentForm onSubmit={this.onSubmit} textButton="LIMPIAR" />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null,{ createContent })(ContentCreate);