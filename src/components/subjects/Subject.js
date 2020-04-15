import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';
import { getContentsBySubjectId } from '../../selectors/index';
import ContentListContainer from '../../containers/contents/ContentListContainer';
import './Subject.css'

class Subject extends React.Component{
    render(){
        const { subject, amountContent, onClickEditSubject, onClickUnMountContent, courseName, courseId } = this.props;
        return (
            <>
                <Card className="card-content-course">
                    <Accordion.Toggle as={Card.Header} onClick={()=>onClickUnMountContent()} eventKey={subject.id}>
                        <div className="row d-flex align-items-center justify-content-between" style={{ position: "relative" }}>
                            <div className="col-auto">
                                <div className="row">
                                    <div className="col-lg-11">
                                        {subject.name}
                                    </div>
                                    <div className="col-lg-12">
                                        <small style={{ color:"gray" }}>{amountContent}/{amountContent} contenidos</small>
                                    </div>
                                </div>
                            </div>
                            <i className="icon-change fas fa-angle-down"></i>
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
                            <button onClick={() => onClickEditSubject(subject.id)} className="btn btn-block button-edit-accordion mr-0 border-subject">
                                <div>
                                <p className="d-inline">EDITAR TEMA</p> 
                                    <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                                </div>
                            </button>
                        </div>
                        <div className="col-6 p-0">
                            <Link to={`/subjects/Delete/courseName/${courseId}/subjectName/${subject.id}`} className="btn btn-block btn-outline-danger ml-0 border-subject">
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
}

const mapStateToProps = (state, ownProps) => {
    return { amountContent: getContentsBySubjectId(state,ownProps.subject.id).length }
}

export default connect(mapStateToProps,null)(Subject);
