import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm';
import {editQuestion} from '../../actions/question'

class QuestionEdit extends React.Component{

    onSubmit = (formValues) => {
        this.props.editQuestion(this.props.currentQuestion.id,formValues)
    }

    renderButtton = () => {
        return(
            <div className="row align-items-center mb-3 justify-content-between">
                <div className="col-auto">
                    <h1 className="title-published">Editar pregunta</h1>
                </div>
                <div className="col-auto">
                    <button onClick={()=>this.props.onClickIsNotEditing()} className="btn btn-outline-danger">
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
        const { currentQuestion } = this.props;
        return (
            <div className="container">
                {this.renderButtton()}
                <div className="row">
                    <div className="col-12 subject-shadow mb-4 create-form p-3">
                        <QuestionForm textButton="DESHACER CAMBIOS" onSubmit={this.onSubmit} initialValues ={_.pick(currentQuestion,'content')}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect(null,{ editQuestion})(QuestionEdit);