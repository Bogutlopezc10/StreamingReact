import React from 'react'
import SubjectPlayer from '../../components/player/SubjectPlayer'
import Accordion from 'react-bootstrap/Accordion';

const SubjectListPlayer = (props) => {

    return(
        <>
            <div>
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