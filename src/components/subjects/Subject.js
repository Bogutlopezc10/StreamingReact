import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ContentListContainer from '../../containers/contents/ContentListContainer';
import './Subject.css'

const Subject = ({ subject }) => {
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
            </Card>
        </>
    )
}

export default Subject;