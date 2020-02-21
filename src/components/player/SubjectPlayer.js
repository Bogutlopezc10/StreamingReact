import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ContentListPlayerContainer from '../../containers/player/ContentListPlayerContainer'

const SubjectPlayer = ({subject, courseId}) =>{

    return(
        <>
            <Card className="card-content-course">
                <Accordion.Toggle as={Card.Header} eventKey={subject.id}>
                    <div className="row d-flex align-items-center justify-content-between">
                        <div className="col-auto">
                            <div className="row">
                                <div className="col-lg-12">
                                    {subject.name}
                                </div>
                            </div>
                        </div>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={subject.id}>
                    <Card.Body>
                       <ContentListPlayerContainer
                            subjectId={subject.id} 
                       />
                    </Card.Body>
                </Accordion.Collapse>              
            </Card>
        </>
    )
}


export default SubjectPlayer;