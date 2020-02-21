import React from 'react'
import SubjectPlayer from '../../components/player/SubjectPlayer'
import Accordion from 'react-bootstrap/Accordion';
import './Player.css';

const SubjectListPlayer = (props) => {

    return(
        <>
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
        </>
    )
}

export default SubjectListPlayer;