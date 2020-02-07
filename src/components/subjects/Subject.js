import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ContentListContainer from '../../containers/contents/ContentListContainer';
import './Subject.css'

const Subject = ({ subject, onClickEditSubject }) => {
    return (
        <>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey={subject.id}>
                    <div className="row d-flex">
                        <div className="col-lg-12">
                            {subject.name}
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={subject.id}>
                    <Card.Body>
                        <ContentListContainer subjectId={subject.id} />
                    </Card.Body>
                </Accordion.Collapse>
                <div className="row">
                    <div className="col-6 p-0">
                        <button onClick={() => onClickEditSubject(subject.id)} className="btn btn-block teacher-button mr-0 border-subject">
                            <div>
                            <p className="d-inline">EDITAR</p> 
                                <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 p-0">
                        <button className="btn btn-block btn-outline-danger ml-0 border-subject">
                            <div>
                            <p className="d-inline">ELIMINAR</p> 
                                <i className="d-inline fas fa-trash-alt ml-2 mt-2"></i>
                            </div>
                        </button>
                    </div>
                </div>
                
            </Card>
        </>
    )
}

export default Subject;