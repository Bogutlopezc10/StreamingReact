import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ContentListContainer from '../../containers/contents/ContentListContainer';
import './Subject.css'

const Subject = ({ subject, onClickEditSubject, courseName, courseId }) => {
    
    return (
        <>
            <Card className="card-content-course">
                <Accordion.Toggle as={Card.Header} eventKey={subject.id}>
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            {subject.name}
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={subject.id}>
                    <Card.Body>
                        <ContentListContainer
                         subjectId={subject.id} 
                         courseName ={courseName}
                         courseId = {courseId}
                        />
                    </Card.Body>
                </Accordion.Collapse>
                <div className="row">
                    <div className="col-6 p-0">
                        <button onClick={() => onClickEditSubject(subject.id)} className="btn btn-block course-button mr-0 border-subject">
                            <div>
                              <p className="d-inline">EDITAR TEMA</p> 
                                <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 p-0">
                        <Link to={`/subjects/Delete/${courseName}/${courseId}/${subject.name}/${subject.id}`} className="btn btn-block btn-outline-danger ml-0 border-subject">
                            <div>
                            <p className="d-inline">ELIMINAR TEMA</p> 
                                <i className="d-inline fas fa-trash-alt ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                </div>
                
            </Card>
        </>
    )
}

export default Subject;