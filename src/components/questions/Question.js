import React from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

const Question = ({question, courseName, courseId}) =>{

    return (
        <>
             <Card className="card-content-course">
                <Accordion.Toggle as={Card.Header} eventKey={question.id}>
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            {question.content}
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={question.id}>
                    <Card.Body>
                        <h1>dkjnfnf</h1>
                    </Card.Body>
                </Accordion.Collapse>
                <div className="row">
                    <div className="col-6 p-0">
                        <button  className="btn btn-block course-button mr-0 border-subject">
                            <div>
                              <p className="d-inline">EDITAR PREGUNTA</p> 
                                <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 p-0">
                        <Link className="btn btn-block btn-outline-danger ml-0 border-subject">
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


export default Question;