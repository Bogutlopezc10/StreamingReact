import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { editContent } from '../../actions/content';
import ContentForm from './ContentForm';

class ContentEdit extends React.Component{
    renderButton = () => {
        return(
            <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                    <h1 className="title-content">Contenidos</h1>
                </div>
                <div className="col-auto">
                    <button onClick={this.props.onClickIsNotEditingContent} className="btn btn-outline-danger">
                        <div>
                            <p className="d-inline">CANCELAR</p> 
                            <i className="d-inline fas fa-times ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    onSubmit = (formValues) => {
        this.props.editContent(this.props.currentContent.id,formValues);
    }


    render(){
        const { currentContent } = this.props;
        return (
            <div className="container">
                {this.renderButton()}
                <div className="row mt-3 mb-3 d-flex justify-content-start">
                    <div className="col-12 shadow create-form p-3">
                        <ContentForm onSubmit={this.onSubmit} textButton="DESHACER CAMBIOS" initialValues ={_.pick(currentContent,'name','url')} />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{ editContent })(ContentEdit);