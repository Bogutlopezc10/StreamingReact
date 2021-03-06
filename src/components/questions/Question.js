import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import OptionListContainer from '../../containers/options/OptionListContainer'
import {getOptionsByQuestionId} from '../../selectors/index'
import {connect} from 'react-redux'

const Question = ({question, courseName, courseId, onClickEditQuestion, amountOptions}) =>{

    return (
        <>
             <Card className="card-content-course">
                <Accordion.Toggle as={Card.Header} eventKey={question.id}>
                    <div className="row d-flex" style={{ position: "relative" }}>
                        <div className="col-lg-12">
                            {question.content}
                        </div>
                        <div className="col-lg-12">
                            <small style={{ color:"gray" }}>{amountOptions}/{amountOptions} opciones</small>
                        </div>
                        <i className="icon-change fas fa-angle-down"></i>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={question.id}>
                    <Card.Body>
                        <OptionListContainer
                             questionId={question.id} 
                             courseName ={courseName}
                             courseId = {courseId}
                        />
                    </Card.Body>
                </Accordion.Collapse>
                <div className="row">
                    <div className="col-6 p-0">
                        <button onClick={() => onClickEditQuestion(question.id)}  className="btn btn-block button-edit-accordion mr-0 border-subject">
                            <div>
                              <p className="d-inline">EDITAR PREGUNTA</p> 
                                <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 p-0">
                        <Link to={`/questions/Delete/${courseName}/${courseId}/${question.id}`} className="btn btn-block btn-outline-danger ml-0 border-subject">
                            <div>
                            <p className="d-inline">ELIMINAR PREGUNTA</p> 
                                <i className="d-inline fas fa-trash-alt ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </Card>
        </>
    )
}
const mapStateToProps = (state, ownProps) => {
    return { amountOptions: getOptionsByQuestionId(state,ownProps.question.id).length }
}

export default connect(mapStateToProps,null)(Question);