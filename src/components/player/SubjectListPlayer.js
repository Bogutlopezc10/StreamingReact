import React from 'react'
import SubjectPlayer from '../../components/player/SubjectPlayer'
import Accordion from 'react-bootstrap/Accordion';
import './Player.css';

const SubjectListPlayer = (props) => {

    return(
        <>
            <div className="col-lg-4 col-subject">
                <div className="d-flex align-items-center pl-0 container-subject-header">
                    <div className="col-lg-12">
                        <h5>Contenido del curso</h5>
                    </div>
                </div>
                <div className="container-subject-player">
                    <Accordion>
                        { props.subjects.map( subject => 
                            <SubjectPlayer
                                key={subject.id} 
                                subject={subject} 
                                courseId={props.courseId}
                            />
                        )}
                    </Accordion>
                </div>      
            </div>
        </>
    )
}

export default SubjectListPlayer;